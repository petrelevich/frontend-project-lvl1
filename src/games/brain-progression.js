import readlineSync from 'readline-sync';

const getRandomInt = () => Math.floor(Math.random() * 10);
const inputAnswer = () => readlineSync.question('Your answer: ');

const questionOutput = () => console.log('What number is missing in the progression?');

const progressionSize = 10;

const makeProgression = () => {
  const delta = getRandomInt();
  let element = getRandomInt();
  const progression = [];
  progression.push(element);
  for (let idx = 1; idx < progressionSize; idx += 1) {
    element += delta;
    progression.push(element);
  }
  return progression;
};

const playRound = () => {
  const progression = makeProgression();
  const hiddenIdx = getRandomInt() % progressionSize;
  const correctAnswer = progression[hiddenIdx];
  progression[hiddenIdx] = '..';
  const progressionAsString = progression.join(' ');

  console.log(`Question: ${progressionAsString}`);
  const answer = parseInt(inputAnswer(), 10);

  return answer === correctAnswer;
};

export { questionOutput, playRound };
