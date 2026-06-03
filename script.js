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

const againaBtn = document.querySelector('.again');

const number = Math.trunc(Math.random() * 20 + 1);

let score = 20;

checkBtn.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  //When there is no input
  if (!guess) {
    messageEl.textContent = '⛔ No number!';

    //When player wins
  } else if (guess === number) {
    messageEl.textContent = 'Correct Number!  🥳';
    document.body.style.backgroundColor = '#60b347'; //adding CSS properties
    numberEl.textContent = number;
    numberEl.style.width = '30rem';

    //When player guesses high
  } else if (guess > number) {
    console.log(guess);
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
    console.log(guess);
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

againaBtn.addEventListener('click', function () {
  score = 20;
  numberEl.style = `  background: #eee;
  color: #333;
  font-size: 6rem;
  width: 15rem;
  padding: 3rem 0rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  `;
  guessEl.value = '';
  messageEl.textContent = 'Start guessing...';
});
