'use strict';

function secrettNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = secrettNumber();
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  //Logic
  secretNumber = secrettNumber();
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;

  //Style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //When there's no number
  if (!guess) {
    document.querySelector('.message').textContent = ' 🚫 No number';
  }

  //When the user hits the right number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      ' 🎉 Parabéns! Você acertou!!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When it's too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📈 O numero é um pouco menor';
      document.querySelector('.score').textContent = score = score - 1;
      document.querySelector('.number').textContent = guess;
    } else {
      document.querySelector('.message').textContent = '💣 Você perdeu!';
    }
  }

  //When it's too low
  else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📉 O número é um pouco maior';
      document.querySelector('.score').textContent = score = score - 1;
      document.querySelector('.number').textContent = guess;
    } else {
      document.querySelector('.message').textContent = '💣 Você perdeu!';
    }
  }
});
