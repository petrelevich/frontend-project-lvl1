import getRandomInt from '../utils/generator.js';

//  to avoid value = 1 we perform +1
const getNumer = () => getRandomInt(1);

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getDataForRound = () => {
  const question = getNumer();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export { task, getDataForRound };
