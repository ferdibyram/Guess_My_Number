'use strict';

/*
document.querySelector('.message').textContent = 'Correct Number🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;
document.querySelector('.guess').value = 13;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});

// Playing game via check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😒 You lost the game... ');
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = '#b33636ff';
    }
  } else {
    displayMessage('BRAVOO 🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#90c465ff';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  console.log(!guess);
  console.log(secretNumber);
});
