import readlineSync from 'readline-sync';
import { questionOutput as calcQuestionOutput, playRound as calcPlayRound } from './games/brain-calc.js';
import { questionOutput as gcdQuestionOutput, playRound as gcdPlayRound } from './games/brain-gcd.js';

const inputUserName = () => readlineSync.question('May I have your name? ');

const rounds = 3;

const getQuestionOutput = (gameName) => {
  switch (gameName) {
    case 'brain-calc':
      return (calcQuestionOutput);
    case 'brain-gcd':
      return (gcdQuestionOutput);
    default:
      throw new Error(`Unknown game name: ${gameName}`);
  }
};

const getPlayRound = (gameName) => {
  switch (gameName) {
    case 'brain-calc':
      return (calcPlayRound);
    case 'brain-gcd':
      return (gcdPlayRound);
    default:
      throw new Error(`Unknown game name: ${gameName}`);
  }
};

const game = () => {
  const gameName = process.argv.slice(2)[0];
  console.log(gameName);

  console.log('Welcome to the Brain Games!');
  const userName = inputUserName();
  console.log(`Hello, ${userName}!`);

  getQuestionOutput(gameName)();

  for (let correctNo = 0; correctNo < rounds; correctNo += 1) {
    const result = getPlayRound(gameName)();
    if (result) {
      console.log('Correct!');
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

game();
