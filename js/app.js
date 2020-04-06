const user = prompt('What is your name? Type in the box your name, please.');
const readyButton = document.querySelector('#submitButton');
const header = document.querySelector('.header');
const main = document.getElementById('main');
const mainContent = document.querySelector('.main');
const results = document.querySelector('.results');
const finalButton = document.getElementById('finalButton');
const playAgain = document.getElementById('playAgain')

const button1 = document.getElementById('button1');
const input1 = document.getElementById('input1');
const button2 = document.getElementById('button2');
const input2 = document.getElementById('input2');
const button3 = document.getElementById('button3');
const input3 = document.getElementById('input3');
const button4 = document.getElementById('button4');
const input4 = document.getElementById('input4');
const button5 = document.getElementById('button5');
const input5 = document.getElementById('input5');
const button6 = document.getElementById('button6');
const input6 = document.getElementById('input6');
const button7 = document.getElementById('button7');
const input7 = document.getElementById('input7');
const button8 = document.getElementById('button8');
const input8 = document.getElementById('input8');
const button9 = document.getElementById('button9');
const input9 = document.getElementById('input9');
const button10 = document.getElementById('button10');
const input10 = document.getElementById('input10');
main.style.display = 'none';
results.style.display = 'none';
let spellingArray = [];
let answersArray = [];

function resetGame() {
  results.style.display = 'none';
  answersArray = [];
  document.querySelectorAll('.main div input').forEach(item => item.value = '');
  main.style.display = 'block';
}

function createMainContent(num) {
  let div = document.createElement('div');
  main.appendChild(div);
  let p = document.createElement('p');
  p.textContent = num;
  div.appendChild(p);
  let input = document.createElement('input');
  div.appendChild(input);
}

function lastCheck(user) {
  let correctAnswers = [];
  let wrongAnswers = [];
  for (let i = 0; i<spellingArray.length; i++) {
    if (spellingArray[i].toLowerCase() == answersArray[i].toLowerCase()) {
      correctAnswers.push(answersArray[i].toLowerCase());
    } else {
      wrongAnswers.push(answersArray[i].toLowerCase());
    }
  }
  if (wrongAnswers.length > 0) {
    let html = `<ul><h2>Dear ${user}. You had ${wrongAnswers.length} wrong answers. They are:</h2>`;
    wrongAnswers.forEach(item => {
      html += `<li>${item}</li>`;
    });
    html += '</ul>';
    html += '<button id="playAgain" onclick="resetGame()">Play Again!</button>';
    return html;
  } else {
    return `<h2>Everything correct. ${user}, you are a spelling Hero!</h2>`;
  }
}

function addEvent(input, button) {
  if (input.value !== '') {
    button.style.backgroundColor = 'green';
    spellingArray.push(input.value);
  } else {
    alert('Dont forget to fill in the box and confirm!');
  }
}

button1.addEventListener('click', () => addEvent(input1, button1));
button2.addEventListener('click', () => addEvent(input2, button2));
button3.addEventListener('click', () => addEvent(input3, button3));
button4.addEventListener('click', () => addEvent(input4, button4));
button5.addEventListener('click', () => addEvent(input5, button5));
button6.addEventListener('click', () => addEvent(input6, button6));
button7.addEventListener('click', () => addEvent(input7, button7));
button8.addEventListener('click', () => addEvent(input8, button8));
button9.addEventListener('click', () => addEvent(input9, button9));
button10.addEventListener('click', () => addEvent(input10, button10));

readyButton.addEventListener('click', () => {
  if (spellingArray.length === 10) {
    header.style.display = 'none';
    console.log(spellingArray);
    main.style.display = 'block';
    for (let i = 1; i<=spellingArray.length; i++) {
      createMainContent(`${i}.`);
    }
  } else {
    alert('Please fill in all 10 words.');
  }
});

finalButton.addEventListener('click', () => {
  let allAnswers = main.querySelectorAll('input');
  allAnswers.forEach(item => answersArray.push(item.value));
  console.log(answersArray);
  results.style.display = 'block';
  main.style.display = 'none';
  results.innerHTML = lastCheck(user);
});
