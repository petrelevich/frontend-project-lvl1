import readlineSync from 'readline-sync';

const inputUserName = () => readlineSync.question('May I have your name? ');
const inputAnswer = () => readlineSync.question('Your answer: ');

const randomInt = () => Math.floor(Math.random() * 100);

const correctNumber = 3;

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = inputUserName();
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let correctNo = 0; correctNo < correctNumber; correctNo += 1) {
    const random = randomInt();
    const even = random % 2 === 0;
    console.log(`Question: ${random}`);
    const answer = inputAnswer();

    if ((answer === 'yes' && even) || (answer === 'no' && !even)) {
      console.log('Correct!');
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

game();
