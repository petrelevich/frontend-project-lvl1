import getRandomInt from '../utils/generator.js';

const getGcd = (inVal1, inVal2) => {
  let val1 = inVal1;
  let val2 = inVal2;
  while (val2) {
    const tmp = val2;
    val2 = val1 % val2;
    val1 = tmp;
  }
  return val1;
};

const task = 'Find the greatest common divisor of given numbers.';

const getDataForRound = () => {
  const random1 = getRandomInt();
  const random2 = getRandomInt();
  const answer = getGcd(random1, random2);

  const question = `${random1} ${random2}`;
  const correctAnswer = answer.toString(10);

  return { question, correctAnswer };
};

export { task, getDataForRound };
