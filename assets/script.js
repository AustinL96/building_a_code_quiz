//Grabs the Start Quiz button
var startButton = document.getElementById('start-button');
//Grabs the question div
var quizQuestion = document.getElementById('question');
//Grabs the entire div that contains each answer button
var answersSection= document.getElementById('answers');
var btns = document.querySelectorAll('buttons');

var question1 = {
    questionText: 'Where do you put the JavaScript link in your HTML?',
    choices: ['<main>', '<script>', '<button>', 'in a class'],
    correctIndex: 1
};
var question2 = {
    questionText: 'How do you create a function in JavaScript?',
    choices: ['function.queryselector(true)', 'function.new() {}', 'function newFunction() {}', 'upTownFuncYouUp'],
    correctIndex: 2 
};
var question3 = {
    questionText: 'String sections in JavaScript contain what?',
    choices: ['Fibers twisted together to form a strand', 'Data represented in text form', 'Violins, cellos, guitars', 'Lots of knots'],
    correctIndex: 1
}
var question4 = {
    questionText: 'What do we use to identify the first option in an array?',
    choices: ['0', '1', '2', 'one'],
    correctIndex: 0
}

//Begins the quiz
startButton.addEventListener('click', startQuiz);

function startQuiz() {

}
//Function to apply var=questions options to the question and buttons
function displayQuestion() {

}

function addNextQuestion() {

}


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