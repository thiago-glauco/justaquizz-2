// Import stylesheets
import './style.css';
import { Question } from './question';
import { QUESTIONS } from './questionsData';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter Quiz</h1>`;

//creating the app

let questionsTemplate = ``;
const questionsContainer = document.getElementById('questionsContainer');
const questionObjects = [];
const wrongMessage = `<p class="wrong"><b>It is not right!</b>Try again!<\p>`;

for (let questionData of QUESTIONS ) {
  let question = new Question( questionData );
  questionObjects.push(question)
  let numOfOptions = question.options.length;
  console.log(question);
  questionsTemplate = `
  <div class="question" id="question${question.questionId}">
    <p>Question ${question.questionId}: ${question.sentence}</p>
    <p>Choose an answer </p>
    <input type="radio" name="answer${question.questionId}" value="a" id="a" >a. JavaScript does not support functions.<br>
    <input type="radio" name="answer${question.questionId}" value="b" id="b">b. A chunk of code that is associated to a name.<br>
    <input type="radio" name="answer${question.questionId}" value="c" id="c">c. Codes that execute a mathematical function.<br>
    <button id="${question.questionId}" value="Send Aswer">Send Aswer</button>
    <div id="answer${question.questionId}"></div>
  </div>
  `
  questionsContainer.innerHTML += questionsTemplate;
}
for(let questionobject of questionObjects){
  document.getElementById(questionobject.questionId).addEventListener('click', checkAnswer);
}



function checkAnswer( $event ) {
  let clickedObject = questionObjects.filter( ( obj ) => { return obj.questionId === Number($event.target.id) } )[0]
  console.log(clickedObject);
  console.log(clickedObject.getCorrectAnswer());  
  const answers = document.getElementsByName('answer' + clickedObject.questionId.toString() );
  const answer = document.getElementById('answer' + clickedObject.questionId.toString());
  if (answers[clickedObject.getCorrectAnswer()].checked){
   answer.innerHTML = `<p class="correct">You are right! JavaScript is a High Level language, so it can not be a low level language!<\p>`
  }
  else {
    answer.innerHTML = wrongMessage;
    for( let answer of answers ) {
      answer.checked = false;
    }
  }
}
/*
//Question 1
btn1.onclick = function() {
  const answers = document.getElementsByName('answer1');
  const answer1 = document.getElementById('answer1');
  if (answers[0].checked){
   answer1.innerHTML = `<p class="correct">You are right! JavaScript is a High Level language, so it can not be a low level language!<\p>`
  }
  else {
    answer1.innerHTML = wrongMessage;
    for( let answer of answers ) {
      answer.checked = false;
    }
  }
}

//Question 2
btn2.onclick = function() {
  const answers = document.getElementsByName('answer2');
  const answer2 = document.getElementById('answer2');
  if (answers[1].checked){
   answer2.innerHTML = `<p class="correct">You are right! A function is answer1 chunk of code that is associated to a name!<\p>`
  }
  else {
    answer2.innerHTML = wrongMessage;
    for( let answer of answers ) {
      answer.checked = false;
    }
  }
}

//Question 3
btn3.onclick = function() {
  const answers = document.getElementsByName('answer3');
  const answer3 = document.getElementById('answer3');
  if (answers[2].checked){
   answer3.innerHTML = `<p class="correct">You are right! Arrays are objects with numerical indexes<\p>`
  }
  else {
    answer3.innerHTML = wrongMessage;
    for( let answer of answers ) {
      answer.checked = false;
    }
  }
}
*/



