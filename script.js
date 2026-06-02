'use strict';

//Before
const messageEl = document.querySelector('.message');

//After
// messageEl.textContent = 'Correct Number!';
// console.log(messageEl.textContent);

const numberEl = document.querySelector('.number');

const scoreEl = document.querySelector('.score');

const guessEl = document.querySelector('.guess');

const checkBtn = document.querySelector('.check');

const number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
numberEl.textContent = number;
checkBtn.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  //When there is no input
  if (!guess) {
    messageEl.textContent = '⛔ No number!';

    //When player wins
  } else if (guess === number) {
    messageEl.textContent = 'Correct Number!  🥳';
    document.body.style.backgroundColor = '#60b347'; //adding CSS properties
    numberEl.style.width = '30rem';

    //When player guesses high
  } else if (guess > number) {
    if (score > 1) {
      messageEl.textContent = 'Too High! 📈';
      score--;
      scoreEl.textContent = score;
    } else {
      scoreEl.textContent = score - 1;
      messageEl.textContent = 'You lost the game 😭';
    }

    //When player guesses low
  } else if (guess < number) {
    if (score > 1) {
      messageEl.textContent = 'Too low! 📉';
      score--;
      scoreEl.textContent = score;
    } else {
      scoreEl.textContent = score - 1;
      messageEl.textContent = 'You lost the game 😭';
    }
  }
});
