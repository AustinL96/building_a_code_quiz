//Grabs "question-container", which contains Question and all answer buttons
var quizQuestionContainer = document.querySelector('.question-container');
//Grabs "quiz-question", which is where the question goes
var quizQuestion = document.querySelector('.quiz-question');
//Grabs the buttons, which is all 4 answer buttons
var buttons = document.querySelector('.buttons');
//Grabs the individual button element
var button0 = document.getElementById('button1');
var button1 = document.getElementById('button2');
var button2 = document.getElementById('button3');
var button3 = document.getElementById('button4');
//Grabs the Start Quiz button
var startButton = document.querySelector('.start-button');
//Grabs the Next Question button
var nextButton = document.querySelector('.next-button');
var h2 = document.querySelector('h2');

//Hides the start button and brings up the Questions
function startTheQuiz() {
  startButton.classList.add('hide');
  h2.classList.remove('hide');
  h3.classList.remove('hide');
  nextButton.classList.remove('hide');
  displayQuestion();
  countdown()
}

//Begins the quiz, and moves to next question
startButton.addEventListener('click', startTheQuiz);
nextButton.addEventListener('click', displayQuestion);

//Tracks the current index card
var currentQuestionIndex = 0;
var currentQuestion;
var result0
var result1
var result2
var result3
//Function that displays a question to the window
function displayQuestion() {
  currentQuestion = questionsList[currentQuestionIndex];
  quizQuestion.innerText = currentQuestion.question;
  quizQuestion.classList.remove('hide');
  buttons.classList.remove('hide');

  button0.innerText = currentQuestion.answers[0].text;
  button1.innerText = currentQuestion.answers[1].text;
  button2.innerText = currentQuestion.answers[2].text;
  button3.innerText = currentQuestion.answers[3].text;
  // console.log(currentQuestion.answers[3].correct)
  currentQuestionIndex++;
}


// Make it on click of any of the buttons a function 
button0.addEventListener('click', checkResult0);
button1.addEventListener('click', checkResult1);
button2.addEventListener('click', checkResult2);
button3.addEventListener('click', checkResult3);
//Amount of time subtracted for getting an answer wrong

function checkResult0() {
  result0 = questionsList[currentQuestionIndex];
  if (result0.answers[0].correct === false) {
    button0.setAttribute("style", "background-color: red");
    //Time Penalty
    count--;
  } else {
    button0.setAttribute("style", "background-color: green")
  }
}

function checkResult1() {
  result1 = questionsList[currentQuestionIndex];
  if (result1.answers[0].correct === false) {
    button1.setAttribute("style", "background-color: red");
    //Time Penalty
    count--;
  } else {
    button1.setAttribute("style", "background-color: green")
  }
}

function checkResult2() {
  result2 = questionsList[currentQuestionIndex];
  if (result2.answers[0].correct === false) {
    button2.setAttribute("style", "background-color: red");
    //Time Penalty
    count--;
  } else {
    button2.setAttribute("style", "background-color: green")
  }
}

function checkResult3() {
  result3 = questionsList[currentQuestionIndex];
  if (result3.answers[0].correct === false) {
    button3.setAttribute("style", "background-color: red");
    //Time Penalty
    count--;
  } else {
    button3.setAttribute("style", "background-color: green")
  }
}






//adjusts the timer
var h3 = document.querySelector('h3');
var count = 20;
function countdown() {
    var timer = setInterval(function () {
      count--;
      h3.innerText = 'Count: ' + count;
      if (count === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }