// Import stylesheets
import './style.css';
import { Question } from './question';
import { QUESTIONS } from './questionsData';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter Quiz</h1>`;

//creating the app

let questionsTemplate = ``;
for (let questionData of QUESTIONS ) {
  let question = new Question( questionData );
  let numOfOptions = question.options.length;
  console.log(question);
  questionsTemplate += `
  <div class="question" id="question${question.questionId}">
    <p>Question ${question.questionId}: ${question.sentence}</p>
    <p>Choose an answer </p>
    <input type="radio" name="answer${question.questionId}" value="a" id="a" >a. JavaScript does not support functions.<br>
    <input type="radio" name="answer${question.questionId}" value="b" id="b">b. A chunk of code that is associated to a name.<br>
    <input type="radio" name="answer${question.questionId}" value="c" id="c">c. Codes that execute a mathematical function.<br>
    <input type="button" id="btn${question.questionId}" value="Send Aswer">
    <div id="answer${question.questionId}"></div>
  </div>
  `
}
console.log(questionsTemplate);

const questionsContainer = document.getElementById('questionsContainer');
questionsContainer.innerHTML = questionsTemplate;

//Just getting the buttons
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const wrongMessage = `<p class="wrong"><b>It is not right!</b>Try again!<\p>`;


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



