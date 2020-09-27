const getRandomInt = () => Math.floor(Math.random() * 10);

const questionOutput = (userOutput) => userOutput('What number is missing in the progression?');

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

const playRound = (userOutput, userInput) => {
  const progression = makeProgression();
  const hiddenIdx = getRandomInt() % progressionSize;
  const correctAnswer = progression[hiddenIdx];
  progression[hiddenIdx] = '..';
  const progressionAsString = progression.join(' ');

  userOutput(`Question: ${progressionAsString}`);

  return userInput('Your answer: ').then((answer) => parseInt(answer, 10) === correctAnswer)
    .catch((msg) => `Error:${msg}`);
};

export { questionOutput, playRound };
