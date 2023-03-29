const questions = [
  {
    question: "Which of the following is not a JavaScript data type?",
    choices: ["String", "Number", "Boolean", "Character"],
    answer: "Character",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    choices: ["//", "/* */", "#", "<!-- -->"],
    answer: "//",
  },
  {
    question: "What is the correct way to create an array in JavaScript?",
    choices: [
      "let arr = (1, 2, 3)",
      "let arr = [1, 2, 3]",
      "let arr = {1, 2, 3}",
      "let arr = new Array(1, 2, 3)",
    ],
    answer: "let arr = [1, 2, 3]",
  },
  {
    question: "Which built-in method is used to remove an element from the beginning of an array?",
    choices: ["pop()", "shift()", "splice()", "unshift()"],
    answer: "shift()",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onclick", "onmouseclick", "onmouseover", "onmousedown"],
    answer: "onclick",
  },
  {
    question: "What does the 'this' keyword refer to in a JavaScript function?",
    choices: [
      "The current function",
      "The global object",
      "The owner of the function",
      "The arguments passed to the function",
    ],
    answer: "The owner of the function",
  },
  {
    question: "Which method is used to convert a JSON string into a JavaScript object?",
    choices: ["JSON.parse()", "JSON.stringify()", "JSON.load()", "JSON.dump()"],
    answer: "JSON.parse()",
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "function myFunction() {}",
      "def myFunction() {}",
      "function: myFunction() {}",
      "create myFunction() {}",
    ],
    answer: "function myFunction() {}",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    choices: ["var x;", "x = 0;", "const x;", "let x;"],
    answer: "var x;",
  },
  {
    question: "What is the correct syntax to call a function named 'myFunction'?",
    choices: ["myFunction()", "call myFunction", "execute myFunction", "run myFunction"],
    answer: "myFunction()",
  },
];




let score = 0;
let timer = 60;
let currentQuestionIndex = 0;
let interval;

const quizContainer = document.getElementById("quiz-container");
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.style.display = "none";
  interval = setInterval(countdown, 1000);
  displayQuestion();
}

function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  quizContainer.innerHTML = "";
  const question = questions[currentQuestionIndex];
  const questionText = document.createElement("h2");
  questionText.textContent = question.question;
  quizContainer.appendChild(questionText);

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = `${index + 1}. ${choice}`;
    button.addEventListener("click", handleAnswer);
    quizContainer.appendChild(button);
  });
}

function handleAnswer(event) {
  const userChoice = event.target.textContent.slice(3);
  if (userChoice === questions[currentQuestionIndex].answer) {
    score++;
  } else {
    timer -= 10;
  }

  currentQuestionIndex++;
  displayQuestion();
}

function countdown() {
  timer--;
  if (timer <= 0) {
    clearInterval(interval);
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(interval);
  quizContainer.innerHTML = `<h2>Your score is: ${score}</h2>`;
  const input = document.createElement("input");
  input.placeholder = "Enter your initials";
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.addEventListener("click", saveScore);
  quizContainer.appendChild(input);
  quizContainer.appendChild(submitBtn);
}

function saveScore() {
  const initials = document.querySelector("input").value;
  const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  const newScore = { initials, score };
  highscores.push(newScore);
  highscores.sort((a, b) => b.score - a.score);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  window.location.href = "highscores.html"; // Redirect to the high scores page
}
