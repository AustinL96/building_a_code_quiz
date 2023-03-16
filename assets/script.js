//Grabs "question-container", which contains Question and all answer buttons
var quizQuestionContainer = document.querySelector('.question-container');
//Grabs "quiz-question", which is where the question goes
var quizQuestion = document.querySelector('.quiz-question');
//Grabs the buttons, which is all 4 answer buttons
var buttons = document.querySelector('.buttons');
//Grabs the individual button element
var button = document.querySelectorAll('.button')
//Grabs the Start Quiz button
var startButton = document.querySelector('.start-button');
//Grabs the Next Question button
var nextButton = document.querySelector('.next-button');

//Tracks the current index card
var currentQuestionIndex = 0;

//Function that displays a question to the window
function displayQuestion() {
  quizQuestion.innerText = question1.text;
  quizQuestion.classList.remove('hide');
  buttons.classList.remove('hide');
  for (var i = 0; i < question1.choices.length; i++) {
    var choice = question1.choices[i];

    button.textContent = choice;
    button.dataset = i;
  }
}

function addNextQuestion() {

}

//Hides the start button and brings up the Questions
function startTheQuiz() {
  startButton.classList.add('hide');
  displayQuestion();
}

//Begins the quiz, and moves to next question
startButton.addEventListener('click', startTheQuiz);
nextButton.addEventListener('click', displayQuestion);
  currentQuestionIndex++;



//adjusts the timer
var h3 = document.querySelector('h3');
var count = 30;
function countdown() {
    var timer = setInterval(function () {
      count--;
      h3.innerText = 'Count: ' + count;
      if (count === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
countdown()