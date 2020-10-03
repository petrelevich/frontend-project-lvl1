import getRandomInt from './generator.js';

//  to avoid value = 1 we perform +1
const getNumer = () => getRandomInt() + 1;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getTask = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getDataForRound = () => {
  const number = getNumer();

  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export { getTask, getDataForRound };
