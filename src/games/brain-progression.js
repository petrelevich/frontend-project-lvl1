import getRandomInt from './generator.js';

const progressionSize = 10;

const makeProgression = (size) => {
  const delta = getRandomInt(10);
  const startElement = getRandomInt(10);
  const progression = [];
  for (let idx = 0; idx < size; idx += 1) {
    progression.push(startElement + delta * idx);
  }
  return progression;
};

const getTask = () => 'What number is missing in the progression?';

const getDataForRound = () => {
  const progression = makeProgression(progressionSize);
  const hiddenIdx = getRandomInt() % progressionSize;
  const answer = progression[hiddenIdx];
  progression[hiddenIdx] = '..';
  const progressionAsString = progression.join(' ');

  const question = progressionAsString;
  const correctAnswer = answer.toString(10);

  return { question, correctAnswer };
};

export { getTask, getDataForRound };
