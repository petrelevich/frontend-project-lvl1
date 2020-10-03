import getRandomInt from './generator.js';

const getTask = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataForRound = () => {
  const random = getRandomInt();

  const question = random;
  const correctAnswer = (random % 2 === 0) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export { getTask, getDataForRound };
