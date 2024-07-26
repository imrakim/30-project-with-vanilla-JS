// const questions = [
//   {
//     Questions: "Which is the largest Animal In the world",
//     answer: [
//       { text: "shark", correcct: false },
//       { text: "Blue While", correcct: true },
//       { text: "Elephant", correcct: false },
//       { text: "Gerraf", correcct: false },
//     ],
//   },
//   {
//     Questions: "Who is The Founder of Javascript",
//     answer: [
//       { text: "Brendan Eich", correcct: true },
//       { text: "Mark Zuckerberg", correcct: false },
//       { text: "Elon Musk", correcct: false },
//       { text: "Bill Gates", correcct: false },
//     ],
//   },
//   {
//     Questions: "When Fouwhen microsoft founded",
//     answer: [
//       { text: "April 4, 1976", correcct: false },
//       { text: "April 14, 1977", correcct: false },
//       { text: "April 4, 1975", correcct: true },
//       { text: "April 24, 1965", correcct: false },
//     ],
//   },
//   {
//     Questions: "who is the founder of facebook",
//     answer: [
//       { text: "Brendan Eich", correcct: false },
//       { text: " Mark Zuckerberg", correcct: true },
//       { text: "Elon Musk", correcct: false },
//       { text: "Bill Gates", correcct: false },
//     ],
//   },
// ];

// const questionsElement = document.getElementById("questions");
// const answerButton = document.getElementById("answer-button");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionsIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionsIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "NEXT";
//   showQuestions();
// }

// function showQuestions() {
//   resetState();
//   let currentQuestions = questions[currentQuestionsIndex];
//   let questionNO = currentQuestionsIndex + 1;
//   questionsElement.innerHTML = questionNO + "." + currentQuestions.Questions;

//   currentQuestions.answer.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     answerButton.appendChild(button);
//     if(button.correcct){
//       button.dataset.correcct=answer.correcct;
//     }
//     button.addEventListener("click", selectAnswer);
//   });
// };

// function resetState(){
//   nextButton.style.display="none";
//   while(answerButton.firstChild){
//     answerButton.removeChild(answerButton.firstChild);
//   }
// };

// function selectAnswer(e){
//   const selectedbtn = e.target;
//   const isCorrect = selectedbtn.dataset.correcct==="true";
//   if(isCorrect){
//     selectedbtn.classList.add("correcct")
//   }else{
//     selectedbtn.classList.add("incorrect")
//   }

// }
// startQuiz();

// chatgpt version

const questions = [
  {
    question: "Which is the largest Animal In the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Who is the Founder of JavaScript?",
    answers: [
      { text: "Brendan Eich", correct: true },
      { text: "Mark Zuckerberg", correct: false },
      { text: "Elon Musk", correct: false },
      { text: "Bill Gates", correct: false },
    ],
  },
  {
    question: "When was Microsoft founded?",
    answers: [
      { text: "April 4, 1976", correct: false },
      { text: "April 14, 1977", correct: false },
      { text: "April 4, 1975", correct: true },
      { text: "April 24, 1965", correct: false },
    ],
  },
  {
    question: "Who is the founder of Facebook?",
    answers: [
      { text: "Brendan Eich", correct: false },
      { text: "Mark Zuckerberg", correct: true },
      { text: "Elon Musk", correct: false },
      { text: "Bill Gates", correct: false },
    ],
  },
];

const questionsElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionsIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionsIndex = 0;
  score = 0;
  nextButton.innerHTML = "NEXT";
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = questions[currentQuestionsIndex];
  let questionNO = currentQuestionsIndex + 1;
  questionsElement.innerHTML = questionNO + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionsElement.innerHTML = `You scored ${score} out of questions${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handlenextbutton() {
  currentQuestionsIndex++;
  if (currentQuestionsIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionsIndex < questions.length) {
    handlenextbutton();
  } else {
    startQuiz();
  }
});

startQuiz();
