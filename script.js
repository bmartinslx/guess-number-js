'use strict';
// * -------------------- .:: Examples::. --------------------------------------
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 22;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //& When there's no input number---------
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No number... ';
    displayMessage('🚫 No number... ');
  }
  //& When user finds the correct number / Wins ----------
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct number...';
    displayMessage('🎉 Correct number...');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '60rem';
    document.querySelector('.number').textContent = secretNumber;

    //& Highscore Set -------------------------------
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high...' : '📉 Too low...';
      displayMessage(guess > secretNumber ? '📈 Too high...' : '📉 Too low...');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game';
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '60rem';
    }
  }

  //& When number is too high ---------------------------------------------------------
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.number').style.width = '60rem';
  //   }
  // }
  //& When number is too low -----------------------------------------------------------
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.number').style.width = '60rem';
  //   }
  // }
});
//& END of the CHECK button function ++++++++++++++++++++++++++++++++++++++++++++++++++++++
//&. . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//& When AGAIN button is clicked ----------------------------------------------------------
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing';
  displayMessage('Start guessing ?!?!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //^ Returns to its original background color
  document.querySelector('body').style.backgroundColor = '#222';
  //^ Returns the size width to normal
  document.querySelector('.number').style.width = '15rem';
});
