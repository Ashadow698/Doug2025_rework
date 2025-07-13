const questions = [
  {
    question: "Which of the following are Roblox currencies?",
    options: ["Robux", "Tix", "Credits", "Coins"],
    correctAnswers: ["Robux", "Tix"]
  },
  {
    question: "Which of these people are related to Roblox?",
    options: ["David Baszucki", "Builderman", "Bill Gates", "Erik Cassel"],
    correctAnswers: ["David Baszucki", "Builderman", "Erik Cassel"]
  },
  {
    question: "What can you do with Roblox Studio?",
    options: ["Create games", "Watch movies", "Build maps", "Script mechanics"],
    correctAnswers: ["Create games", "Build maps", "Script mechanics"]
  },
  {
    question: "Which of the following are popular Roblox game types?",
    options: ["Obby", "Tycoon", "RPG", "FPS"],
    correctAnswers: ["Obby", "Tycoon", "RPG", "FPS"]
  },
  {
    question: "Which are scripting languages?",
    options: ["Lua", "Python", "JavaScript", "RobloxScript"],
    correctAnswers: ["Lua", "Python", "JavaScript"]
  },
  {
    question: "What are ways to earn Robux?",
    options: ["Gamepasses", "Developer products", "Selling clothing", "Daily login"],
    correctAnswers: ["Gamepasses", "Developer products", "Selling clothing"]
  },
  {
    question: "Which Roblox items are wearable?",
    options: ["Hats", "Shirts", "Gears", "Pants"],
    correctAnswers: ["Hats", "Shirts", "Pants"]
  },
  {
    question: "Which roles exist in Roblox groups?",
    options: ["Owner", "Admin", "Member", "Guest"],
    correctAnswers: ["Owner", "Admin", "Member"]
  },
  {
    question: "What are Roblox events known for?",
    options: ["Free items", "Challenges", "Real money rewards", "Badges"],
    correctAnswers: ["Free items", "Challenges", "Badges"]
  },
  {
    question: "What do developers use to monetize games?",
    options: ["Gamepasses", "Ads", "Premium payouts", "Mods"],
    correctAnswers: ["Gamepasses", "Ads", "Premium payouts"]
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const formEl = document.getElementById("options-form");
const submitBtn = document.getElementById("submit-button");
const resultEl = document.getElementById("result");

function renderQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  formEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "option";
    checkbox.value = option;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + option));
    formEl.appendChild(label);
  });
}

function checkAnswer() {
  const selected = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(i => i.value);
  const correct = questions[currentQuestion].correctAnswers;

  // Check if selected matches correct (order-independent, full match)
  const isCorrect =
    selected.length === correct.length &&
    selected.every(val => correct.includes(val));

  if (isCorrect) score++;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showFinalResult();
  }
}

function showFinalResult() {
  questionEl.classList.add("hidden");
  formEl.classList.add("hidden");
  submitBtn.classList.add("hidden");
  resultEl.classList.remove("hidden");
  resultEl.textContent = `Quiz complete! You scored ${score} out of ${questions.length}.`;
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkAnswer();
});

renderQuestion();
