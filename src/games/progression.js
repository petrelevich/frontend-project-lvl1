import getRandomInt from '../utils/generator.js';

const progressionSize = 10;

const makeProgression = (size, delta, startElement) => {
  const progression = [];
  for (let idx = 0; idx < size; idx += 1) {
    progression.push(startElement + delta * idx);
  }
  return progression;
};

const task = 'What number is missing in the progression?';

const getDataForRound = () => {
  const delta = getRandomInt(0, 10);
  const startElement = getRandomInt(0, 10);
  const progression = makeProgression(progressionSize, delta, startElement);
  const hiddenIdx = getRandomInt() % progressionSize;
  const answer = progression[hiddenIdx];
  progression[hiddenIdx] = '..';
  const progressionAsString = progression.join(' ');

  const question = progressionAsString;
  const correctAnswer = answer.toString(10);

  return { question, correctAnswer };
};

export { task, getDataForRound };
