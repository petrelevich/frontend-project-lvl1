import readlineSync from 'readline-sync';

const inputAnswer = () => readlineSync.question('Your answer: ');

const randomInt = () => Math.floor(Math.random() * 100);

const questionOutput = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const playRound = () => {
  const random = randomInt();
  const even = random % 2 === 0;
  console.log(`Question: ${random}`);
  const answer = inputAnswer();
  return ((answer === 'yes' && even) || (answer === 'no' && !even));
};

export { questionOutput, playRound };
