import readlineSync from 'readline-sync';
import { questionOutput as calcQuestionOutput, playRound as calcPlayRound } from './games/brain-calc.js';
import { questionOutput as gcdQuestionOutput, playRound as gcdPlayRound } from './games/brain-gcd.js';
import { questionOutput as progressionQuestionOutput, playRound as progressionPlayRound } from './games/brain-progression.js';
import { questionOutput as primeQuestionOutput, playRound as primePlayRound } from './games/brain-prime.js';

import { questionOutput as evenQuestionOutput, playRound as evenPlayRound } from './games/brain-even.js';

const inputUserName = () => readlineSync.question('May I have your name? ');

const rounds = 3;

const getQuestionOutput = (gameName) => {
  switch (gameName) {
    case 'brain-calc':
      return calcQuestionOutput;
    case 'brain-gcd':
      return gcdQuestionOutput;
    case 'brain-progression':
      return progressionQuestionOutput;
    case 'brain-prime':
      return primeQuestionOutput;
    case 'brain-even':
      return evenQuestionOutput;
    default:
      throw new Error(`Unknown game name: ${gameName}`);
  }
};

const getPlayRound = (gameName) => {
  switch (gameName) {
    case 'brain-calc':
      return calcPlayRound;
    case 'brain-gcd':
      return gcdPlayRound;
    case 'brain-progression':
      return progressionPlayRound;
    case 'brain-prime':
      return primePlayRound;
    case 'brain-even':
      return evenPlayRound;
    default:
      throw new Error(`Unknown game name: ${gameName}`);
  }
};

export default (gameName) => {
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
