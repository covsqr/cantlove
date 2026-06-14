const MODEL = "gpt-4.1-mini";

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return response.status(204).end();
  }

  try {
    const body = typeof request.body === "string" ? JSON.parse(request.body) : request.body;
    const answers = Array.isArray(body?.answers) ? body.answers.slice(0, 8) : [];
    const localResult = body?.localResult || {};

    if (answers.length === 0) {
      return response.status(400).json({ error: "answers are required" });
    }

    const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.8,
        max_output_tokens: 1400,
        input: [
          {
            role: "system",
            content:
              "너는 한국어 연애 커뮤니케이션 테스트 서비스 '연못'의 결과 카피라이터다. 사용자의 카톡 답장을 분석하되 모욕하지 말고, 직설적이고 밈처럼 재밌지만 실용적으로 말한다. 무조건 상대 감정을 받아주라는 식의 을의 연애 조언은 피하고, 호감 표현·자기 입장·경계 설정·대화 지속력의 균형을 본다. 진단은 의학/심리 치료처럼 단정하지 않는다. JSON만 출력한다."
          },
          {
            role: "user",
            content: JSON.stringify({
              instruction:
                "아래 8문항 응답들과 규칙 기반 결과를 바탕으로 최종 결과 JSON을 작성해줘. 타입별 의미를 반드시 구분해라. free는 text가 사용자가 실제 보낸 답장이다. choice_reason은 selectedOption이 사용자의 선택이고 text/reasonText는 선택 이유이므로, 이유 문장을 '가장 위험했던 답장'으로 인용하지 말고 필요하면 selectedOption만 평가해라. rewrite는 text/rewrittenText가 사용자가 고친 문장이고 originalText는 원래 나쁜 예시이므로 사용자 답장처럼 비난하지 마라. '대화 맥락 이탈', '딴소리', '무시' 평가는 사용자가 명백히 연애 대화와 무관한 주제로 빠진 경우에만 써라. 짧거나 건조하거나 이유를 적은 문장을 맥락 이탈로 몰지 마라. 좋은 답변이 많으면 억지로 비난하지 말고 칭찬과 개선점을 섞어라. 점수는 공감/명확함/온도/여유를 0~100 정수로 주고, overall도 0~100 정수로 줘라.",
              answers,
              localResult
            })
          }
        ],
        text: {
          format: {
            type: "json_schema",
            name: "yeonmot_result",
            strict: true,
            schema: {
              type: "object",
              additionalProperties: false,
              properties: {
                title: { type: "string" },
                summary: { type: "string" },
                weaknesses: {
                  type: "array",
                  minItems: 3,
                  maxItems: 4,
                  items: { type: "string" }
                },
                tips: {
                  type: "array",
                  minItems: 3,
                  maxItems: 4,
                  items: { type: "string" }
                },
                directCallout: { type: "string" },
                worstAnswer: { type: "string" },
                scores: {
                  type: "object",
                  additionalProperties: false,
                  properties: {
                    empathy: { type: "integer", minimum: 0, maximum: 100 },
                    clarity: { type: "integer", minimum: 0, maximum: 100 },
                    warmth: { type: "integer", minimum: 0, maximum: 100 },
                    pace: { type: "integer", minimum: 0, maximum: 100 }
                  },
                  required: ["empathy", "clarity", "warmth", "pace"]
                },
                overall: { type: "integer", minimum: 0, maximum: 100 }
              },
              required: ["title", "summary", "weaknesses", "tips", "directCallout", "worstAnswer", "scores", "overall"]
            }
          }
        }
      })
    });

    if (!openaiResponse.ok) {
      return response.status(204).end();
    }

    const data = await openaiResponse.json();
    const text =
      data.output_text ||
      data.output?.flatMap((item) => item.content || [])?.find((item) => item.type === "output_text")?.text;

    if (!text) {
      return response.status(204).end();
    }

    return response.status(200).json({ result: JSON.parse(text) });
  } catch (error) {
    return response.status(204).end();
  }
};
