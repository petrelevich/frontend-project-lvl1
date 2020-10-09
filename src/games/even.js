import getRandomInt from '../utils/generator.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataForRound = () => {
  const question = getRandomInt();
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export { task, getDataForRound };
