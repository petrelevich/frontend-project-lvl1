import readlineSync from 'readline-sync';
import { questionOutput, playRound } from './games/brain-calc.js';

const inputUserName = () => readlineSync.question('May I have your name? ');

const rounds = 3;

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = inputUserName();
  console.log(`Hello, ${userName}!`);

  questionOutput();

  for (let correctNo = 0; correctNo < rounds; correctNo += 1) {
    const result = playRound();
    if (result) {
      console.log('Correct!');
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

game();
