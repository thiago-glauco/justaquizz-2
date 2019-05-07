// Import stylesheets
import './style.css';
import { Question } from './question';
import { QUESTIONS } from './questionsData';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter Quiz</h1>`;

//creating the app

let questionsTemplate = ``;

//The questions will be written inside the question container
const questionsContainer = document.getElementById('questionsContainer');
const questionObjects = [];

//Creating as many questions as I have in a datasource
for (let questionData of QUESTIONS ) {
  let question = new Question( questionData );
  questionObjects.push(question)
  let numOfOptions = question.options.length;
  console.log(question);

  //Usign a template I can create as many questions as needed without coding infinity HTML...
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
//Add event listners
for(let questionobject of questionObjects){
  document.getElementById(questionobject.questionId).addEventListener('click', checkAnswer);
}


//check answers
function checkAnswer( $event ) {
  let clickedObject = questionObjects.filter( ( obj ) => { return obj.questionId === Number($event.target.id) } )[0];
  const wrongMessage = `<p class="wrong"><b>It is not right!</b>Try again!<\p>`;
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




