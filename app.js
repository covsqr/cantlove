const scenarios = [
  {
    id: "late-reply-lover",
    type: "free",
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
    type: "free",
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
    type: "free",
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
    type: "free",
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
    id: "read-receipt-pressure",
    type: "choice_reason",
    category: "썸",
    title: "읽고 답이 늦은 사람",
    description:
      "썸 상대가 당신의 메시지를 읽고 3시간 뒤에 답장을 보냈습니다. 기분이 살짝 상했지만, 대화를 망치고 싶지는 않습니다.",
    name: "썸 상대",
    messages: [
      ["아 미안 이제 봤어 ㅠ", "18:47"],
      ["오늘 정신이 좀 없었다", "18:48"],
      ["뭐하고 있어?", "18:48"]
    ],
    choices: [
      "서운함을 바로 말한다",
      "가볍게 넘기고 대화를 이어간다",
      "상대 사정을 먼저 확인한다",
      "나도 늦게 답장하며 거리를 둔다"
    ],
    placeholder: "왜 그렇게 하려는지 한 줄로 적어주세요."
  },
  {
    id: "anniversary-miss",
    type: "choice_reason",
    category: "애인",
    title: "기념일을 놓친 밤",
    description:
      "바쁜 하루를 보내다 애인과의 작은 기념일을 깜빡했습니다. 밤이 되어서야 애인이 보낸 카톡을 확인했습니다.",
    name: "애인",
    messages: [
      ["오늘 무슨 날인지 까먹은 거 아니지?", "21:11"],
      ["아니면 일부러 모른 척 하는 거야?", "21:13"],
      ["좀 서운하다", "21:28"]
    ],
    choices: [
      "먼저 사과하고 바로 수습 계획을 말한다",
      "바빴던 이유를 설명한 뒤 사과한다",
      "서운한 건 이해하지만 몰아붙이는 건 불편하다고 말한다",
      "장난으로 분위기를 풀어본다"
    ],
    placeholder: "선택한 이유를 한 줄로 적어주세요."
  },
  {
    id: "group-date-boundary",
    type: "priority",
    category: "데이트",
    title: "친구들 앞에서 나온 농담",
    description:
      "데이트 중 우연히 만난 친구들 앞에서 상대가 당신을 소재로 농담을 했고, 당신은 그 말이 꽤 불편했습니다. 집에 돌아온 뒤 상대가 카톡을 보냈습니다.",
    name: "상대",
    messages: [
      ["오늘 친구들이랑 갑자기 봐서 웃겼다 ㅋㅋ", "22:06"],
      ["근데 너 좀 조용해진 것 같던데", "22:07"],
      ["혹시 기분 나빴어?", "22:07"]
    ],
    choices: [
      "불편했던 농담을 정확히 짚는다",
      "상대가 민망하지 않게 가볍게 넘긴다",
      "친구들 앞이라 참았다고 말한다",
      "다음부터 하지 말아 달라고 선을 긋는다"
    ],
    placeholder: "선택 이유가 있으면 한 줄로 덧붙여도 됩니다."
  },
  {
    id: "ex-check-in",
    type: "priority",
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
    choices: [
      "현재 관계의 선을 먼저 정한다",
      "왜 연락했는지 확인한다",
      "안부만 짧게 답하고 끝낸다",
      "다시 만날 여지를 열어둔다"
    ],
    placeholder: "선택 이유가 있으면 한 줄로 덧붙여도 됩니다."
  },
  {
    id: "rewrite-defensive",
    type: "rewrite",
    category: "갈등",
    title: "방어적인 문장 고치기",
    description:
      "상대가 서운함을 말했을 때, 아래 답장은 너무 방어적으로 들릴 수 있습니다. 같은 입장을 지키되 더 나은 문장으로 고쳐보세요.",
    name: "상대",
    messages: [
      ["아까 네 말 좀 상처였어", "23:32"],
      ["그냥 넘어가려 했는데 계속 생각나", "23:35"]
    ],
    originalText: "아니 그런 뜻 아닌데 왜 그렇게 받아들여?",
    placeholder: "이 문장을 더 낫게 고쳐보세요."
  },
  {
    id: "rewrite-too-safe",
    type: "rewrite",
    category: "썸",
    title: "무난한 답장 살리기",
    description:
      "썸 상대가 다음 만남을 열어둔 상황입니다. 아래 답장은 예의는 있지만 온도가 거의 없습니다. 당신답게 더 낫게 고쳐보세요.",
    name: "썸 상대",
    messages: [
      ["오늘 얘기 재밌었어", "21:42"],
      ["다음에 시간 되면 또 보자", "21:43"]
    ],
    originalText: "네 좋아요 시간 되면 봐요.",
    placeholder: "이 문장을 더 낫게 고쳐보세요."
  }
];

const resultTypes = [
  {
    id: "defensive",
    title: "방어형 물수제비",
    summary:
      "마음은 있는데 첫 반응이 방어부터 나옵니다. 상대가 원하는 건 대화인데, 당신 답장은 자꾸 '내가 뭘 잘못했는데?'로 들립니다.",
    match: (scores) => scores.empathy < 50 && scores.clarity >= 45
  },
  {
    id: "essay",
    title: "해명 과다 장문형",
    summary:
      "진심을 설명하려다 설명서가 됩니다. 길게 쓰는 동안 상대는 이해보다 피로를 먼저 느낍니다.",
    match: (scores, metrics) => metrics.averageLength > 95 || metrics.averageTime > 65
  },
  {
    id: "interviewer",
    title: "연애 면접관형",
    summary:
      "질문은 던지지만 온도가 부족합니다. 대화는 이어지는데, 상대 입장에서는 썸이 아니라 면접 보는 기분입니다.",
    match: (scores, metrics) => metrics.questionRatio > 0.65 && scores.warmth < 58
  },
  {
    id: "solid",
    title: "답장 기본기 있음형",
    summary:
      "크게 사고 치는 답장은 아닙니다. 다만 안전하게만 가는 순간이 있어서, 조금만 더 구체적으로 표현하면 관계가 앞으로 움직입니다.",
    match: (scores) => scores.empathy >= 60 && scores.clarity >= 60 && scores.warmth >= 65 && scores.pace >= 55
  },
  {
    id: "dry",
    title: "읽씹 유발 단답형",
    summary:
      "틀린 말은 아닌데 이어 받을 손잡이가 없습니다. 이 정도로 짧으면 쿨한 게 아니라 그냥 성의 없어 보입니다.",
    match: (scores, metrics) =>
      metrics.averageLength < 14 ||
      (metrics.averageLength < 24 && scores.warmth < 58 && scores.empathy < 58)
  },
  {
    id: "rush",
    title: "급발진 온수형",
    summary:
      "감정 표현이 빠르고 진합니다. 좋은 마음이어도 상대 속도보다 앞서가면 설렘이 아니라 부담입니다.",
    match: (scores) => scores.warmth > 78 && scores.pace < 55
  },
  {
    id: "safe",
    title: "안전빵 노잼형",
    summary:
      "크게 잘못하진 않지만 기억에 남는 온도가 약합니다. 무난함 뒤에 숨으면 관계도 조용히 식습니다.",
    match: () => true
  }
];

const state = {
  step: 0,
  answers: [],
  startedAt: 0,
  firstTypedAt: 0,
  editCount: 0,
  isDeletingGroup: false,
  previousLength: 0,
  selectedOption: "",
  result: null
};

const $ = (selector) => document.querySelector(selector);
const screens = document.querySelectorAll(".screen");
const replyInput = $("#replyInput");
const replyForm = $("#replyForm");
const typingMeta = $("#typingMeta");
const chatLog = $("#chatLog");

function setScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === name);
  });
}

function startTest() {
  state.step = 0;
  state.answers = [];
  state.result = null;
  clearSharedResultHash();
  renderScenario();
  setScreen("test");
}

function goHome() {
  state.step = 0;
  state.answers = [];
  state.result = null;
  clearSharedResultHash();
  setScreen("intro");
}

function renderScenario() {
  const scenario = scenarios[state.step];
  $("#stepLabel").textContent = `${state.step + 1} / ${scenarios.length}`;
  $("#progressFill").style.width = `${((state.step + 1) / scenarios.length) * 100}%`;
  $("#scenarioCategory").textContent = scenario.category;
  $("#scenarioTitle").textContent = scenario.title;
  $("#scenarioDescription").textContent = scenario.description;
  $("#chatName").textContent = "카카오톡";
  replyInput.value = "";
  replyInput.placeholder = scenario.placeholder;
  typingMeta.textContent = "채팅방을 열면 측정이 시작됩니다.";
  replyForm.classList.add("is-hidden");
  state.startedAt = 0;
  state.firstTypedAt = 0;
  state.editCount = 0;
  state.isDeletingGroup = false;
  state.previousLength = 0;
  state.selectedOption = "";

  if (scenario.type === "free") {
    renderPreviewScenario(scenario);
    return;
  }

  renderStructuredScenario(scenario);
}

function renderPreviewScenario(scenario) {
  const latest = scenario.messages[scenario.messages.length - 1];
  const previewText = latest[0];
  const shouldShowHint = state.step === 0 && localStorage.getItem("yeonmot_preview_hint_seen") !== "1";

  chatLog.innerHTML = `
    <div class="kakao-shot">
      <div class="shot-status">
        <span>KakaoTalk</span>
        <span>${formatKakaoTime(latest[1])}</span>
      </div>
      <button class="chat-preview" type="button" data-open-chat>
        <div class="preview-avatar" aria-hidden="true">
          <span>${escapeHtml(scenario.name.slice(0, 1))}</span>
        </div>
        <div class="preview-main">
          <div class="preview-head">
            <strong>${escapeHtml(scenario.name)}</strong>
            <span>${formatKakaoTime(latest[1])}</span>
          </div>
          <p>${escapeHtml(previewText)}</p>
        </div>
        <span class="unread-badge">${scenario.messages.length}</span>
      </button>
    </div>
    ${
      shouldShowHint
        ? `<div class="preview-guide" aria-hidden="true"><span>여기를 눌러 채팅방 열기</span></div>`
        : `<p class="open-hint">미리보기를 눌러 채팅방을 여세요.</p>`
    }
  `;
}

function renderStructuredScenario(scenario) {
  $("#chatName").textContent = scenario.name || "연못";
  replyForm.classList.remove("is-hidden");
  replyInput.value = "";
  state.startedAt = performance.now();
  typingMeta.textContent = "입력 대기 중";

  const messages = scenario.messages
    .map(
      ([text, time]) => `
        <div class="message-row">
          <div class="bubble">${escapeHtml(text)}</div>
          <span class="time">${formatKakaoTime(time)}</span>
        </div>
      `
    )
    .join("");
  const choices = Array.isArray(scenario.choices)
    ? `<div class="choice-list" role="radiogroup" aria-label="선택지">
        ${scenario.choices
          .map(
            (choice, index) => `
              <button class="choice-option" type="button" data-choice="${escapeHtml(choice)}">
                <span>${index + 1}</span>${escapeHtml(choice)}
              </button>
            `
          )
          .join("")}
      </div>`
    : "";
  const rewrite = scenario.type === "rewrite"
    ? `<div class="rewrite-card">
        <span>고칠 문장</span>
        <strong>${escapeHtml(scenario.originalText)}</strong>
      </div>`
    : "";

  chatLog.innerHTML = `${messages}${choices}${rewrite}`;

  if (scenario.type === "priority") {
    typingMeta.textContent = "우선순위를 하나 선택하세요. 이유는 선택입니다.";
  }

  requestAnimationFrame(() => {
    if (scenario.type === "rewrite" || scenario.type === "choice_reason") {
      replyInput.focus();
    }
  });
}

function updateTypingMeta() {
  const length = replyInput.value.trim().length;
  const elapsed = Math.max(0, Math.round((performance.now() - state.startedAt) / 1000));
  typingMeta.textContent = `${length}자 · ${elapsed}초째 고민 중 · 수정 ${state.editCount}회`;
}

function handleInput() {
  if (!state.startedAt) return;

  if (!state.firstTypedAt && replyInput.value.length > 0) {
    state.firstTypedAt = performance.now();
  }

  if (replyInput.value.length < state.previousLength && !state.isDeletingGroup) {
    state.editCount += 1;
  }

  if (replyInput.value.length < state.previousLength) {
    state.isDeletingGroup = true;
  } else if (replyInput.value.length > state.previousLength) {
    state.isDeletingGroup = false;
  }

  state.previousLength = replyInput.value.length;
  updateTypingMeta();
}

function openChatRoom() {
  const scenario = scenarios[state.step];
  localStorage.setItem("yeonmot_preview_hint_seen", "1");
  $("#chatName").textContent = scenario.name;
  replyForm.classList.remove("is-hidden");
  replyInput.value = "";
  state.startedAt = performance.now();
  state.firstTypedAt = 0;
  state.editCount = 0;
  state.isDeletingGroup = false;
  state.previousLength = 0;
  typingMeta.textContent = "입력 대기 중";

  chatLog.innerHTML = scenario.messages
    .map(
      ([text, time]) => `
        <div class="message-row">
          <div class="bubble">${escapeHtml(text)}</div>
          <span class="time">${formatKakaoTime(time)}</span>
        </div>
      `
    )
    .join("");

  requestAnimationFrame(() => replyInput.focus());
}

async function submitAnswer(event) {
  event.preventDefault();
  if (!state.startedAt) return;

  const text = replyInput.value.trim();
  const scenario = scenarios[state.step];

  if (scenario.type === "choice_reason" && !state.selectedOption) {
    typingMeta.textContent = "선택지를 먼저 골라주세요.";
    return;
  }

  if (scenario.type === "priority" && !state.selectedOption) {
    typingMeta.textContent = "우선순위를 하나 선택해주세요.";
    return;
  }

  if (scenario.type !== "priority" && text.length < 2) {
    typingMeta.textContent = "두 글자 이상은 써야 진단할 수 있어요.";
    replyInput.focus();
    return;
  }

  if (text && isHardBlockedAnswer(text)) {
    typingMeta.textContent = "이건 답장이 아니라 회피입니다. 진짜 보낼 말을 써주세요.";
    replyInput.focus();
    return;
  }

  const submittedAt = performance.now();
  state.answers.push({
    scenarioId: scenario.id,
    type: scenario.type,
    title: scenario.title,
    description: scenario.description,
    messages: scenario.messages,
    choices: scenario.choices || [],
    text,
    selectedOption: state.selectedOption,
    originalText: scenario.originalText || "",
    isOffTopic: text ? isOffTopicAnswer(text, scenario) : false,
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
      acc.offTopic += answer.isOffTopic ? 1 : 0;
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
      vague: 0,
      offTopic: 0
    }
  );

  const count = answers.length;
  const metrics = {
    averageLength: totals.length / count,
    averageTime: totals.time / count,
    averageEdits: totals.edits / count,
    questionRatio: totals.questions / count,
    defensiveRatio: totals.defensive / count,
    vagueRatio: totals.vague / count,
    offTopicRatio: totals.offTopic / count
  };

  const scores = {
    empathy: clamp(42 + totals.empathy * 10 + totals.apologies * 5 - totals.defensive * 10 - totals.offTopic * 8),
    clarity: clamp(44 + totals.clear * 11 - totals.vague * 9 - totals.offTopic * 12 - (metrics.averageLength > 120 ? 8 : 0)),
    warmth: clamp(40 + totals.warm * 11 + totals.questions * 4 - totals.defensive * 6 - totals.offTopic * 8),
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
    directCallout: buildDirectCallout({ scores, overall, metrics }),
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

function isHardBlockedAnswer(text) {
  const normalized = normalize(text);
  const compact = normalized.replace(/\s+/g, "");
  const hangulCount = (normalized.match(/[가-힣]/g) || []).length;
  const letterCount = (normalized.match(/[a-zA-Z가-힣]/g) || []).length;

  if (letterCount > 0 && hangulCount / letterCount < 0.25) return true;
  if (/^(.)\1{5,}$/.test(compact)) return true;
  if (/^(.{1,6})\1{3,}$/.test(compact)) return true;
  if (/(.)\1{8,}/.test(compact)) return true;

  return false;
}

function isOffTopicAnswer(text, scenario) {
  const normalized = normalize(text);
  const features = getTextFeatures(normalized);
  const scenarioText = `${scenario.description} ${scenario.messages.map(([message]) => message).join(" ")}`;
  const scenarioKeywords = Array.from(new Set((scenarioText.match(/[가-힣]{2,}/g) || []).map((word) => word.slice(0, 4))));
  const relationshipWords = [
    "미안",
    "걱정",
    "괜찮",
    "오늘",
    "다음",
    "만나",
    "좋",
    "고마",
    "말",
    "연락",
    "답장",
    "집",
    "도착",
    "생각",
    "마음",
    "얘기"
  ];
  const hasSignal =
    features.hasQuestion ||
    features.hasApology ||
    features.hasEmpathy ||
    features.hasClarity ||
    features.hasWarmth ||
    relationshipWords.some((word) => normalized.includes(word)) ||
    scenarioKeywords.some((word) => normalized.includes(word));

  return normalized.length >= 8 && !hasSignal;
}

function buildWeaknesses(scores, metrics, totals) {
  const items = [];

  if (scores.empathy < 58) {
    items.push("상대 반응을 아예 계산에 넣지 않는 순간이 있습니다. 맞춰주라는 뜻이 아니라, 상대가 왜 저 말을 했는지 읽는 힘이 약합니다.");
  }
  if (scores.clarity < 58) {
    items.push("내 입장이 충분히 설명되지 않습니다. 배려만 하거나 농담만 하면, 결국 상대가 빈칸을 추측하게 됩니다.");
  }
  if (scores.warmth < 58) {
    items.push("호감 표현이 약합니다. 무난하게 방어는 했지만, 관계가 앞으로 갈 만한 온도는 적습니다.");
  }
  if (scores.pace < 58) {
    items.push("답장을 너무 오래 만집니다. 신중함보다 눈치 보는 느낌이 먼저 납니다.");
  }
  if (metrics.averageLength > 105) {
    items.push("해명이 깁니다. 읽는 사람은 진심보다 변명문을 먼저 봅니다.");
  }
  if (metrics.averageLength < 14 || (metrics.averageLength < 24 && scores.warmth < 58)) {
    items.push("답장이 짧습니다. 이 정도면 관심 없는 척이 아니라 그냥 관심 없어 보입니다.");
  }
  if (totals.defensive >= 2) {
    items.push("억울함이 먼저 튀어나옵니다. 문제 해결 전에 상대를 피곤하게 만듭니다.");
  }
  if (totals.offTopic > 0) {
    items.unshift("대화 맥락에서 벗어난 답장이 있습니다. 상대 입장에선 장난이 아니라 무시로 보입니다.");
  }

  if (items.length === 0) {
    items.push("치명적인 문제는 없습니다. 다만 답장이 무난하게 끝나는 편이라, 상대가 설렐 만한 구체성이 조금 부족합니다.");
  }

  return items.slice(0, 4);
}

function buildTips(scores, metrics) {
  const tips = [];

  if (scores.empathy < 60) {
    tips.push("상대 감정을 무조건 받아주지 말고, 상대가 문제 삼는 지점을 먼저 짚으세요. 그 다음 내 입장을 말해야 을처럼 보이지 않습니다.");
  }
  if (scores.clarity < 60) {
    tips.push("내가 어디까지 괜찮고 어디부터 불편한지도 말하세요. 착하게만 답하면 좋은 사람이 아니라 애매한 사람이 됩니다.");
  }
  if (metrics.questionRatio < 0.35) {
    tips.push("답장 끝에는 상대가 바로 이어 말할 수 있는 질문을 하나 남기세요.");
  }

  if (scores.warmth < 60) {
    tips.push("좋았다, 고맙다, 보고 싶다 같은 말을 아끼지 마세요. 안 하면 없는 줄 압니다.");
  }
  if (metrics.averageTime > 60) {
    tips.push("완벽한 답장보다 30초 안에 보내는 덜 멋진 답장이 더 낫습니다.");
  }
  if (metrics.averageLength > 100) {
    tips.push("장문이 필요하면 카톡에서 끝내려 하지 말고 통화로 넘기세요.");
  }
  if (metrics.offTopicRatio > 0) {
    tips.push("농담을 하더라도 상대가 방금 한 말은 먼저 받아주세요. 맥락을 무시하면 센스가 아니라 회피입니다.");
  }
  if (tips.length === 0) {
    tips.push("지금처럼 대화는 이어가되, 다음 약속이나 감정을 한 문장 더 구체적으로 붙이면 훨씬 좋습니다.");
    tips.push("질문만 던지기보다 내 감상도 같이 주세요. 상대는 정보보다 온도를 기억합니다.");
    tips.push("잘한 답장은 그대로 두고, 애매한 상황에서만 사과와 설명의 순서를 더 신경 쓰면 됩니다.");
  }

  return tips.slice(0, 4);
}

function pickWorstAnswer(answers) {
  const ranked = answers
    .map((answer) => {
      const features = getTextFeatures(normalize(answer.text));
      let risk = 0;
      risk += features.hasDefense ? 22 : 0;
      risk += features.hasEmpathy || features.hasWarmth || features.hasQuestion ? -8 : 12;
      risk += answer.charCount < 12 ? 14 : 0;
      risk += answer.charCount > 135 ? 12 : 0;
      risk += answer.timeToSubmit > 80 ? 10 : 0;
      risk += answer.isOffTopic ? 28 : 0;
      return { ...answer, risk };
    })
    .sort((a, b) => b.risk - a.risk);
  const worst = ranked[0];

  if (!worst || worst.risk < 18) {
    return {
      text: "크게 위험한 답장은 없었습니다. 전체적으로 대화를 이어가려는 의도는 잘 보입니다.",
      risk: 0
    };
  }

  return worst;
}

function mergeAiResult(localResult, data) {
  if (!data || !data.result) return localResult;

  if (
    data.result.scores &&
    typeof data.result.overall === "number" &&
    data.result.directCallout
  ) {
    return {
      ...localResult,
      ...data.result,
      scores: {
        ...localResult.scores,
        ...data.result.scores
      },
      metrics: localResult.metrics,
      createdAt: localResult.createdAt
    };
  }

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
  $("#directCallout").textContent = result.directCallout || buildDirectCallout(result);
  $("#empathyScore").textContent = Math.round(result.scores.empathy);
  $("#clarityScore").textContent = Math.round(result.scores.clarity);
  $("#warmthScore").textContent = Math.round(result.scores.warmth);
  $("#paceScore").textContent = Math.round(result.scores.pace);
  $("#weaknessList").innerHTML = result.weaknesses.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  $("#tipList").innerHTML = result.tips.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  $("#worstAnswer").textContent = result.worstAnswer;
  $("#shareNote").textContent = "친구가 링크를 열면 같은 결과지를 볼 수 있습니다.";
}

function formatKakaoTime(value) {
  const [hourText, minuteText] = value.split(":");
  const hour = Number(hourText);
  const period = hour < 12 ? "오전" : "오후";
  const displayHour = hour % 12 || 12;
  return `${period} ${displayHour}:${minuteText}`;
}

function buildDirectCallout(result) {
  const scores = result.scores || {};
  const metrics = result.metrics || {};

  if ((metrics.offTopicRatio || 0) > 0) {
    return "상대가 던진 공을 안 받고 딴소리를 했습니다. 이건 여유가 아니라 대화 이탈입니다.";
  }
  if ((metrics.averageLength || 0) < 10) {
    return "이 답장 길이면 바쁜 게 아니라 관심 없는 사람처럼 보입니다.";
  }
  if ((result.overall || 0) >= 70) {
    return "전체적으로 답장은 괜찮습니다. 문제는 못하는 게 아니라, 가끔 너무 안전하게만 간다는 쪽입니다.";
  }
  if ((metrics.averageLength || 0) > 110) {
    return "지금 필요한 건 장문 해명이 아니라, 사과 한 줄과 다음 행동입니다.";
  }
  if ((scores.empathy || 0) < 50) {
    return "상대 말의 핵심을 안 읽고 내 말만 해서 대화가 바로 엇나갑니다.";
  }
  if ((scores.clarity || 0) < 50) {
    return "말이 애매해서 상대가 안심하는 대신 더 추측하게 됩니다.";
  }
  if ((scores.warmth || 0) < 50) {
    return "예의는 있는데 호감이 없습니다. 받는 사람은 그 차이를 바로 느낍니다.";
  }
  if ((scores.pace || 0) < 55) {
    return "너무 오래 고른 답장은 자연스러움보다 계산한 티가 납니다.";
  }

  return "큰 사고는 안 치지만, 안전하게만 가서 관계가 앞으로 잘 안 움직입니다.";
}

function saveResult(result) {
  const payload = encodePayload(result);
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = `result=${payload}`;
  window.history.replaceState({}, "", url.toString());
}

function clearSharedResultHash() {
  if (!window.location.hash) return;

  const url = new URL(window.location.href);
  url.hash = "";
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
$("#restartBtn").addEventListener("click", goHome);
$("#retryBtn").addEventListener("click", goHome);
$("#shareBtn").addEventListener("click", copyShareLink);
replyInput.addEventListener("input", handleInput);
replyForm.addEventListener("submit", submitAnswer);
chatLog.addEventListener("click", (event) => {
  if (event.target.closest("[data-open-chat]")) {
    openChatRoom();
    return;
  }

  const choice = event.target.closest("[data-choice]");
  if (choice) {
    state.selectedOption = choice.dataset.choice || "";
    chatLog.querySelectorAll("[data-choice]").forEach((button) => {
      button.classList.toggle("is-selected", button === choice);
    });
    typingMeta.textContent = state.selectedOption
      ? `선택: ${state.selectedOption}`
      : "입력 대기 중";
  }
});
window.addEventListener("hashchange", loadSharedResult);

if (!loadSharedResult()) {
  setScreen("intro");
}
