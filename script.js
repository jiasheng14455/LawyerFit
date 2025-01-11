const questions = [
  {
    question: "当你遇到冲突时，你通常会：",
    options: [
      { text: "冷静分析，寻找解决方案", score: 3 },
      { text: "尽量避免冲突，保持和谐", score: 1 },
      { text: "直接表达自己的立场", score: 2 },
      { text: "寻求第三方帮助", score: 1 },
    ],
  },
  {
    question: "你如何看待规则和法律？",
    options: [
      { text: "规则是社会的基石，必须严格遵守", score: 3 },
      { text: "规则很重要，但有时需要灵活处理", score: 2 },
      { text: "规则是为弱者制定的，强者可以超越规则", score: 1 },
      { text: "规则是人为制定的，可以被改变", score: 2 },
    ],
  },
  {
    question: "你在团队中通常扮演什么角色？",
    options: [
      { text: "领导者，负责决策", score: 3 },
      { text: "协调者，确保团队和谐", score: 2 },
      { text: "执行者，专注于完成任务", score: 1 },
      { text: "创新者，提出新想法", score: 2 },
    ],
  },
  {
    question: "你如何处理压力？",
    options: [
      { text: "冷静分析，制定计划", score: 3 },
      { text: "寻求他人帮助", score: 2 },
      { text: "暂时逃避，稍后处理", score: 1 },
      { text: "通过运动或娱乐放松", score: 1 },
    ],
  },
  {
    question: "你如何看待辩论？",
    options: [
      { text: "喜欢辩论，享受思维碰撞", score: 3 },
      { text: "辩论有意义，但不喜欢冲突", score: 2 },
      { text: "辩论浪费时间，不如直接行动", score: 1 },
      { text: "辩论是展示自己观点的好机会", score: 2 },
    ],
  },
];

let currentQuestionIndex = 0;
let totalScore = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const progressText = document.getElementById("progress-text");
const testPage = document.getElementById("test-page");
const resultPage = document.getElementById("result-page");
const resultText = document.getElementById("result-text");

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectOption(option.score));
    optionsElement.appendChild(button);
  });
  progressText.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
  nextButton.disabled = true;
}

function selectOption(score) {
  totalScore += score;
  nextButton.disabled = false;
}

function showResult() {
  testPage.classList.add("hidden");
  resultPage.classList.remove("hidden");
  if (totalScore >= 12) {
    resultText.textContent = "天生律师！你具备成为律师的所有特质，逻辑清晰、善于辩论、坚持正义。";
  } else if (totalScore >= 8) {
    resultText.textContent = "潜力律师！你有成为律师的潜力，但需要进一步提升某些技能。";
  } else {
    resultText.textContent = "不适合律师。你的性格更适合其他职业，比如创意类或服务类工作。";
  }
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

document.getElementById("retry-btn").addEventListener("click", () => {
  currentQuestionIndex = 0;
  totalScore = 0;
  testPage.classList.remove("hidden");
  resultPage.classList.add("hidden");
  showQuestion();
});

// 初始化
showQuestion();