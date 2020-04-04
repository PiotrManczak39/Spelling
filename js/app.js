const user = prompt('What is your name? Type in the box your name, please.');
const readyButton = document.querySelector('#submitButton');
const header = document.querySelector('.header');
const main = document.querySelector('main');
const results = document.querySelector('.results');
main.style.display = 'none';
results.style.display = 'none';
let spellingArray = [];
let answersArray = [];

function createList(arr, user) {
  let html = `<ul><h2>Dear ${user}. Wrong ${arr.length} answers are:</h2>`;
  arr.forEach(item => {
    html += `<li>${item}</li>`;
  });
  html += '</ul>';
  return html;
}

function lastCheck() {
  let correctAnswers = [];
  let wrongAnswers = [];
  for (let i = 0; i<spellingArray.length; i++) {
    if (spellingArray[i].toLowerCase() == answersArray[i].toLowerCase()) {
      correctAnswers.push(answersArray[i].toLowerCase());
    } else {
      wrongAnswers.push(answersArray[i].toLowerCase());
    }
  }
  console.log('Correct Answers are: ' + correctAnswers + ' and wrong answers are: ' + wrongAnswers);
  return createList(wrongAnswers, user);
}

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

function createMainContent(num) {
  let div = document.createElement('div');
  main.appendChild(div);
  let p = document.createElement('p');
  p.textContent = num;
  div.appendChild(p);
  let input = document.createElement('input');
  div.appendChild(input);
  let answerButton = document.createElement('button');
  answerButton.textContent = "I'm done. Move on!";
  answerButton.className = `answerButton${num}`;
  answerButton.addEventListener('click', (e) => {
    if (input.value !== '') {
      event.target.style.backgroundColor = 'green';
      answersArray.push(input.value);
    } else  {
      alert('Dont forget to fill in the box and confirm!');
    }
  });
  div.appendChild(answerButton);
}

function createFinalCheckButton() {
  let div = document.createElement('div');
  main.appendChild(div);
  let p = document.createElement('h3');
  p.textContent = 'If you have finished giving your answer press button below to find find out how you did! Soooo exciting!';
  div.appendChild(p);
  let finalButton = document.createElement('button');
  finalButton.textContent = 'FINISH';
  finalButton.className = 'finalButton';
  finalButton.id = 'finalButton';
  div.appendChild(finalButton);
  finalButton.addEventListener('click', () => {
    if (answersArray.length === 10) {
      results.style.display = 'block';
      main.style.display = 'none';
      console.log(answersArray);
      results.innerHTML = lastCheck();
    } else {
      alert('Confirm all the answers, please!');
    }
  });
}

button1.addEventListener('click', () => {
  if (input1.value !== '') {
    button1.style.backgroundColor = 'green';
    spellingArray.push(input1.value);
  } else {
    alert('Dont forget to fill in the box and confirm!');
  }
});
button2.addEventListener('click', () => {
  if (input2.value !== '') {
    button2.style.backgroundColor = 'green';
    spellingArray.push(input2.value);
  } else {
    alert('Dont forget to fill in the box and confirm!');
  }
});
button3.addEventListener('click', () => {
  if (input3.value !== '') {
    button3.style.backgroundColor = 'green';
    spellingArray.push(input3.value);
  } else {
    alert('Dont forget to fill in the box and confirm!');
  }
});
button4.addEventListener('click', () => {
  if (input4.value !== '') {
    button4.style.backgroundColor = 'green';
    spellingArray.push(input4.value);
  } else {
    alert('Dont forget to fill in the box and confirm!');
  }
});
button5.addEventListener('click', () => {
  if (input5.value !== '') {
    button5.style.backgroundColor = 'green';
    spellingArray.push(input5.value);
  } else {
    alert('Dont forget to fill in the box and confirm!');
  }
});
button6.addEventListener('click', () => {
  button6.style.backgroundColor = 'green';
  spellingArray.push(input6.value);
});
button7.addEventListener('click', () => {
  button7.style.backgroundColor = 'green';
  spellingArray.push(input7.value);
});
button8.addEventListener('click', () => {
  if (input8.value !== '') {
    button8.style.backgroundColor = 'green';
    spellingArray.push(input8.value);
  } else {
    alert('Dont forget to fill in the box and confirm!');
  }
});
button9.addEventListener('click', () => {
  if (input9.value !== '') {
    button9.style.backgroundColor = 'green';
    spellingArray.push(input9.value);
  } else {
    alert('Dont forget to fill in the box and confirm!');
  }
});
button10.addEventListener('click', () => {
  if (input10.value !== '') {
    button10.style.backgroundColor = 'green';
    spellingArray.push(input10.value);
  } else {
    alert('Dont forget to fill in the box and confirm!');
  }
});

readyButton.addEventListener('click', () => {
  if (spellingArray.length === 10) {
    header.style.display = 'none';
    console.log(spellingArray);
    main.style.display = 'block';
    for (let i = 1; i<=spellingArray.length; i++) {
      createMainContent(`${i}.`);
    }
    createFinalCheckButton();
  } else {
    alert('Please fill in all 10 words and confirm!');
  }
});
