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
    const answers = Array.isArray(body?.answers) ? body.answers.slice(0, 5) : [];
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
        max_output_tokens: 900,
        input: [
          {
            role: "system",
            content:
              "너는 한국어 연애 커뮤니케이션 테스트 서비스 '연못'의 결과 카피라이터다. 사용자의 카톡 답장을 분석하되 모욕하지 말고, 직설적이고 밈처럼 재밌지만 실용적으로 말한다. 문제점은 돌려 말하지 않는다. 진단은 의학/심리 치료처럼 단정하지 않는다. JSON만 출력한다."
          },
          {
            role: "user",
            content: JSON.stringify({
              instruction:
                "아래 답변들과 규칙 기반 결과를 바탕으로 title, summary, weaknesses, tips를 한국어 JSON으로 작성해줘. title은 12자 내외의 결과 타입명, summary는 2문장, weaknesses와 tips는 각각 3~4개 문자열 배열.",
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
                }
              },
              required: ["title", "summary", "weaknesses", "tips"]
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
