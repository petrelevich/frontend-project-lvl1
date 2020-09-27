const getRandomInt = () => Math.floor(Math.random() * 10);

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

export default () => {
  const progression = makeProgression();
  const hiddenIdx = getRandomInt() % progressionSize;
  const answer = progression[hiddenIdx];
  progression[hiddenIdx] = '..';
  const progressionAsString = progression.join(' ');

  const task = 'What number is missing in the progression?';
  const question = `Question: ${progressionAsString}`;
  const correctAnswer = answer.toString(10);

  return { task, question, correctAnswer };
};
