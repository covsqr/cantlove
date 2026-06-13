const scenarios = [
  {
    id: "late-reply-lover",
    category: "애인",
    title: "1시간 늦은 답장",
    description:
      "당신은 오랜만에 만난 고등학교 동창들과의 술자리에 나왔습니다. 술을 마시며 이야기하다 보니 카톡 알람이 울리는 걸 놓쳤고, 애인의 카톡에 1시간이 지나서 답장을 하게 되었습니다.",
    name: "애인",
    messages: [
      ["잘 놀고 있어?", "19:02"],
      ["누구 만나는 거랬지?", "19:02"],
      ["바빠?", "19:36"],
      ["연락이 없네..", "20:04"]
    ],
    placeholder: "애인에게 지금 뭐라고 답장할 건가요?"
  },
  {
    id: "crush-low-mood",
    category: "썸",
    title: "나 오늘 좀 별로였어?",
    description:
      "썸을 타는 상대와 둘이 밥을 먹고 헤어진 밤입니다. 대화는 나쁘지 않았다고 생각했는데, 상대가 갑자기 조심스럽게 카톡을 보냈습니다.",
    name: "썸 상대",
    messages: [
      ["오늘 조심히 들어갔어?", "22:41"],
      ["근데 나 오늘 좀 별로였어?", "22:43"],
      ["뭔가 내가 말이 많았던 것 같아서", "22:44"]
    ],
    placeholder: "상대에게 어떤 답장을 보낼 건가요?"
  },
  {
    id: "blind-date-second",
    category: "소개팅",
    title: "다음 약속의 온도",
    description:
      "소개팅이 끝난 뒤 상대가 먼저 연락했습니다. 나쁘진 않았지만 아직 확신은 없습니다. 그래도 대화를 이어갈지, 선을 그을지 결정해야 하는 순간입니다.",
    name: "소개팅 상대",
    messages: [
      ["오늘 잘 들어가셨어요?", "21:18"],
      ["저는 덕분에 재밌었어요", "21:19"],
      ["다음에 또 볼래요?", "21:19"]
    ],
    placeholder: "소개팅 상대에게 답장해보세요."
  },
  {
    id: "date-silent",
    category: "데이트",
    title: "갑자기 조용해진 사람",
    description:
      "데이트 중 상대가 어느 순간부터 말수가 줄었습니다. 헤어진 뒤 집에 도착하자 상대에게 카톡이 왔고, 대화 분위기를 회복할 기회가 생겼습니다.",
    name: "상대",
    messages: [
      ["나 집 도착했어", "23:07"],
      ["오늘 네가 한 말 중에", "23:08"],
      ["좀 신경 쓰이는 게 있었어", "23:08"]
    ],
    placeholder: "분위기를 망치지 않으려면 어떻게 답장할까요?"
  },
  {
    id: "ex-check-in",
    category: "전 애인",
    title: "잘 지내?",
    description:
      "헤어진 지 4개월 된 전 애인에게 갑자기 연락이 왔습니다. 마음이 완전히 정리됐는지 스스로도 애매하지만, 답장은 해야 할 것 같습니다.",
    name: "전 애인",
    messages: [
      ["오랜만이야", "00:12"],
      ["잘 지내?", "00:13"],
      ["그냥 갑자기 생각나서", "00:15"]
    ],
    placeholder: "전 애인에게 뭐라고 답장할 건가요?"
  }
];

const resultTypes = [
  {
    id: "defensive",
    title: "방어형 물수제비",
    summary:
      "마음은 있는데 첫 반응이 방어부터 나옵니다. 상대는 대화를 하고 싶은데, 당신의 답장은 자꾸 책임 소재 재판으로 흘러갑니다.",
    match: (scores) => scores.empathy < 50 && scores.clarity >= 45
  },
  {
    id: "essay",
    title: "해명 과다 장문형",
    summary:
      "진심을 설명하려다 설명서가 됩니다. 상대가 듣고 싶은 건 긴 사건 경위보다 감정 인정과 다음 행동일 때가 많습니다.",
    match: (scores, metrics) => metrics.averageLength > 95 || metrics.averageTime > 65
  },
  {
    id: "interviewer",
    title: "연애 면접관형",
    summary:
      "질문은 던지지만 온도가 부족합니다. 대화는 이어지는데 이상하게 설렘보다 평가받는 기분이 먼저 남습니다.",
    match: (scores, metrics) => metrics.questionRatio > 0.65 && scores.warmth < 58
  },
  {
    id: "dry",
    title: "읽씹 유발 단답형",
    summary:
      "틀린 말은 아닌데 이어 받을 손잡이가 없습니다. 짧고 안전한 답장이 반복되면 상대는 관심이 없다고 느끼기 쉽습니다.",
    match: (scores, metrics) => metrics.averageLength < 24
  },
  {
    id: "rush",
    title: "급발진 온수형",
    summary:
      "감정 표현이 빠르고 진합니다. 좋은 마음도 상대의 속도보다 앞서가면 부담으로 읽힐 수 있습니다.",
    match: (scores) => scores.warmth > 78 && scores.pace < 55
  },
  {
    id: "safe",
    title: "안전빵 노잼형",
    summary:
      "크게 잘못하진 않지만 기억에 남는 온도가 약합니다. 무난함 뒤에 숨으면 관계도 무난하게 식습니다.",
    match: () => true
  }
];

const state = {
  step: 0,
  answers: [],
  startedAt: 0,
  firstTypedAt: 0,
  editCount: 0,
  previousLength: 0,
  result: null
};

const $ = (selector) => document.querySelector(selector);
const screens = document.querySelectorAll(".screen");
const replyInput = $("#replyInput");
const replyForm = $("#replyForm");
const typingMeta = $("#typingMeta");

function setScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === name);
  });
}

function startTest() {
  state.step = 0;
  state.answers = [];
  state.result = null;
  renderScenario();
  setScreen("test");
}

function renderScenario() {
  const scenario = scenarios[state.step];
  $("#stepLabel").textContent = `${state.step + 1} / ${scenarios.length}`;
  $("#progressFill").style.width = `${((state.step + 1) / scenarios.length) * 100}%`;
  $("#scenarioCategory").textContent = scenario.category;
  $("#scenarioTitle").textContent = scenario.title;
  $("#scenarioDescription").textContent = scenario.description;
  $("#chatName").textContent = scenario.name;
  replyInput.value = "";
  replyInput.placeholder = scenario.placeholder;
  typingMeta.textContent = "입력 대기 중";
  state.startedAt = performance.now();
  state.firstTypedAt = 0;
  state.editCount = 0;
  state.previousLength = 0;

  $("#chatLog").innerHTML = scenario.messages
    .map(
      ([text, time]) => `
        <div class="message-row">
          <div class="bubble">${escapeHtml(text)}</div>
          <span class="time">${time}</span>
        </div>
      `
    )
    .join("");

  requestAnimationFrame(() => replyInput.focus());
}

function updateTypingMeta() {
  const length = replyInput.value.trim().length;
  const elapsed = Math.max(0, Math.round((performance.now() - state.startedAt) / 1000));
  typingMeta.textContent = `${length}자 · ${elapsed}초째 고민 중 · 수정 ${state.editCount}회`;
}

function handleInput() {
  if (!state.firstTypedAt && replyInput.value.length > 0) {
    state.firstTypedAt = performance.now();
  }

  if (replyInput.value.length < state.previousLength) {
    state.editCount += 1;
  }

  state.previousLength = replyInput.value.length;
  updateTypingMeta();
}

async function submitAnswer(event) {
  event.preventDefault();
  const text = replyInput.value.trim();

  if (text.length < 2) {
    typingMeta.textContent = "두 글자 이상은 써야 진단할 수 있어요.";
    replyInput.focus();
    return;
  }

  const submittedAt = performance.now();
  state.answers.push({
    scenarioId: scenarios[state.step].id,
    title: scenarios[state.step].title,
    text,
    timeToFirstType: state.firstTypedAt
      ? Math.round((state.firstTypedAt - state.startedAt) / 1000)
      : 0,
    timeToSubmit: Math.round((submittedAt - state.startedAt) / 1000),
    editCount: state.editCount,
    charCount: text.length
  });

  if (state.step < scenarios.length - 1) {
    state.step += 1;
    renderScenario();
    return;
  }

  await finishTest();
}

async function finishTest() {
  setScreen("loading");
  $("#loadingText").textContent = "답장 속도와 말투를 건져 올리는 중...";

  const localResult = analyzeAnswers(state.answers);
  let finalResult = localResult;

  try {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: state.answers, localResult })
    });

    if (response.ok) {
      const data = await response.json();
      finalResult = mergeAiResult(localResult, data);
    }
  } catch (error) {
    finalResult = localResult;
  }

  state.result = finalResult;
  saveResult(finalResult);
  setTimeout(() => {
    renderResult(finalResult);
    setScreen("result");
  }, 650);
}

function analyzeAnswers(answers) {
  const totals = answers.reduce(
    (acc, answer) => {
      const text = normalize(answer.text);
      const features = getTextFeatures(text);
      acc.length += answer.charCount;
      acc.time += answer.timeToSubmit;
      acc.edits += answer.editCount;
      acc.questions += features.hasQuestion ? 1 : 0;
      acc.apologies += features.hasApology ? 1 : 0;
      acc.empathy += features.hasEmpathy ? 1 : 0;
      acc.clear += features.hasClarity ? 1 : 0;
      acc.warm += features.hasWarmth ? 1 : 0;
      acc.defensive += features.hasDefense ? 1 : 0;
      acc.vague += features.hasVague ? 1 : 0;
      return acc;
    },
    {
      length: 0,
      time: 0,
      edits: 0,
      questions: 0,
      apologies: 0,
      empathy: 0,
      clear: 0,
      warm: 0,
      defensive: 0,
      vague: 0
    }
  );

  const count = answers.length;
  const metrics = {
    averageLength: totals.length / count,
    averageTime: totals.time / count,
    averageEdits: totals.edits / count,
    questionRatio: totals.questions / count,
    defensiveRatio: totals.defensive / count,
    vagueRatio: totals.vague / count
  };

  const scores = {
    empathy: clamp(42 + totals.empathy * 10 + totals.apologies * 5 - totals.defensive * 10),
    clarity: clamp(44 + totals.clear * 11 - totals.vague * 9 - (metrics.averageLength > 120 ? 8 : 0)),
    warmth: clamp(40 + totals.warm * 11 + totals.questions * 4 - totals.defensive * 6),
    pace: clamp(76 - Math.max(0, metrics.averageTime - 35) * 0.45 - metrics.averageEdits * 4)
  };
  const overall = Math.round(
    scores.empathy * 0.32 + scores.clarity * 0.28 + scores.warmth * 0.25 + scores.pace * 0.15
  );
  const type = resultTypes.find((candidate) => candidate.match(scores, metrics));
  const weaknesses = buildWeaknesses(scores, metrics, totals);
  const tips = buildTips(scores, metrics, totals);
  const worst = pickWorstAnswer(answers);

  return {
    title: type.title,
    summary: type.summary,
    scores,
    overall,
    weaknesses,
    tips,
    worstAnswer: worst.text,
    metrics,
    createdAt: new Date().toISOString()
  };
}

function getTextFeatures(text) {
  return {
    hasQuestion: /[?？]|뭐|어때|괜찮|볼래|말해|알려|싶어/.test(text),
    hasApology: /미안|죄송|쏘리|미안해|미안하다/.test(text),
    hasEmpathy: /걱정|기다렸|속상|서운|놀랐|그럴 수|신경|마음|불편/.test(text),
    hasClarity: /친구|동창|회사|집|도착|지금|오늘|내일|다음|만나|볼|얘기/.test(text),
    hasWarmth: /좋|재밌|고마|보고|괜찮|다행|편하게|같이|덕분/.test(text),
    hasDefense: /왜 그래|뭐가|했잖아|아니|그냥|별로|집착|예민|피곤/.test(text),
    hasVague: /몰라|아무튼|그냥|나중에|ㅇㅇ|응|네$|글쎄/.test(text)
  };
}

function buildWeaknesses(scores, metrics, totals) {
  const items = [];

  if (scores.empathy < 58) {
    items.push("상대 감정을 먼저 받아주는 문장이 부족합니다.");
  }
  if (scores.clarity < 58) {
    items.push("상황 설명이 흐릿해서 상대가 혼자 추측하게 됩니다.");
  }
  if (scores.warmth < 58) {
    items.push("대화는 이어지지만 호감의 온도가 잘 전달되지 않습니다.");
  }
  if (scores.pace < 58) {
    items.push("답장을 오래 검열하는 편이라 자연스러운 리듬이 깨질 수 있습니다.");
  }
  if (metrics.averageLength > 105) {
    items.push("한 번에 너무 많이 설명해서 핵심 감정이 묻힙니다.");
  }
  if (metrics.averageLength < 26) {
    items.push("답장이 짧아 상대가 대화를 이어 받을 실마리가 적습니다.");
  }
  if (totals.defensive >= 2) {
    items.push("문제를 해결하기 전에 억울함부터 전달되는 순간이 있습니다.");
  }

  return items.slice(0, 4);
}

function buildTips(scores, metrics) {
  const tips = [
    "첫 문장은 해명보다 상대 감정 인정으로 시작하세요.",
    "상황 설명은 한 문장으로 줄이고, 다음 행동을 분명히 말하세요.",
    "답장 끝에는 상대가 이어 말할 수 있는 작은 질문을 남기세요."
  ];

  if (scores.warmth < 60) {
    tips.push("좋았다, 고맙다, 보고 싶다처럼 관계 온도를 올리는 표현을 피하지 마세요.");
  }
  if (metrics.averageTime > 60) {
    tips.push("완벽한 답장보다 30초 안에 보내는 정직한 답장이 더 나을 때가 많습니다.");
  }
  if (metrics.averageLength > 100) {
    tips.push("장문이 필요할수록 카톡에서는 요약하고, 긴 이야기는 통화나 만남으로 넘기세요.");
  }

  return tips.slice(0, 4);
}

function pickWorstAnswer(answers) {
  return answers
    .map((answer) => {
      const features = getTextFeatures(normalize(answer.text));
      let risk = 0;
      risk += features.hasDefense ? 22 : 0;
      risk += features.hasEmpathy ? -10 : 12;
      risk += answer.charCount < 16 ? 16 : 0;
      risk += answer.charCount > 135 ? 12 : 0;
      risk += answer.timeToSubmit > 80 ? 10 : 0;
      return { ...answer, risk };
    })
    .sort((a, b) => b.risk - a.risk)[0];
}

function mergeAiResult(localResult, data) {
  if (!data || !data.result) return localResult;

  return {
    ...localResult,
    title: data.result.title || localResult.title,
    summary: data.result.summary || localResult.summary,
    weaknesses: Array.isArray(data.result.weaknesses)
      ? data.result.weaknesses.slice(0, 4)
      : localResult.weaknesses,
    tips: Array.isArray(data.result.tips) ? data.result.tips.slice(0, 4) : localResult.tips
  };
}

function renderResult(result) {
  $("#resultScore").textContent = `${result.overall}점`;
  $("#resultTitle").textContent = result.title;
  $("#resultSummary").textContent = result.summary;
  $("#empathyScore").textContent = Math.round(result.scores.empathy);
  $("#clarityScore").textContent = Math.round(result.scores.clarity);
  $("#warmthScore").textContent = Math.round(result.scores.warmth);
  $("#paceScore").textContent = Math.round(result.scores.pace);
  $("#weaknessList").innerHTML = result.weaknesses.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  $("#tipList").innerHTML = result.tips.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  $("#worstAnswer").textContent = result.worstAnswer;
  $("#shareNote").textContent = "친구가 링크를 열면 같은 결과지를 볼 수 있습니다.";
}

function saveResult(result) {
  const payload = encodePayload(result);
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = `result=${payload}`;
  window.history.replaceState({}, "", url.toString());
}

function loadSharedResult() {
  const match = window.location.hash.match(/result=([^&]+)/);
  if (!match) return false;

  const result = decodePayload(match[1]);
  if (!result) return false;

  state.result = result;
  renderResult(result);
  setScreen("result");
  $("#shareNote").textContent = "공유된 연못 결과지를 보고 있습니다.";
  return true;
}

async function copyShareLink() {
  const url = window.location.href;

  try {
    await navigator.clipboard.writeText(url);
    $("#shareNote").textContent = "결과 링크를 복사했습니다.";
  } catch (error) {
    $("#shareNote").textContent = url;
  }
}

function encodePayload(value) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(value))))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function decodePayload(value) {
  try {
    const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
    return JSON.parse(decodeURIComponent(escape(atob(padded))));
  } catch (error) {
    return null;
  }
}

function normalize(text) {
  return text.replace(/\s+/g, " ").trim().toLowerCase();
}

function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

$("#startBtn").addEventListener("click", startTest);
$("#restartBtn").addEventListener("click", startTest);
$("#retryBtn").addEventListener("click", startTest);
$("#shareBtn").addEventListener("click", copyShareLink);
replyInput.addEventListener("input", handleInput);
replyForm.addEventListener("submit", submitAnswer);
window.addEventListener("hashchange", loadSharedResult);

if (!loadSharedResult()) {
  setScreen("intro");
}
