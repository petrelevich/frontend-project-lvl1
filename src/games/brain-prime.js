import readlineSync from 'readline-sync';

const getRandomInt = () => Math.floor(Math.random() * 100);
const inputAnswer = () => readlineSync.question('Your answer: ');

const questionOutput = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

//  to avoid value = 1 we perform +1
const getNumer = () => getRandomInt() + 1;

const calcAnswer = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const playRound = () => {
  const number = getNumer();
  const correctAnswer = calcAnswer(number);

  console.log(`Question: ${number}`);
  const answer = inputAnswer();

  return answer === correctAnswer;
};

export { questionOutput, playRound };
