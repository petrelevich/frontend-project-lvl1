import readlineSync from 'readline-sync';

const getRandomInt = () => Math.floor(Math.random() * 100);
const inputAnswer = () => readlineSync.question('Your answer: ');

const questionOutput = () => console.log('Find the greatest common divisor of given numbers.');

const calcAnswer = (inVal1, inVal2) => {
  let val1 = inVal1;
  let val2 = inVal2;
  while (val2) {
    const tmp = val2;
    val2 = val1 % val2;
    val1 = tmp;
  }
  return val1;
};

const playRound = () => {
  const random1 = getRandomInt();
  const random2 = getRandomInt();
  const correctAnswer = calcAnswer(random1, random2);

  console.log(`Question: ${random1} ${random2}`);
  const answer = parseInt(inputAnswer(), 10);

  return answer === correctAnswer;
};

export { questionOutput, playRound };
