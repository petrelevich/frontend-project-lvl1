const getRandomInt = () => Math.floor(Math.random() * 100);

const questionOutput = (userOutput) => userOutput('Answer "yes" if given number is prime. Otherwise answer "no".');

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

const playRound = (userOutput, userInput) => {
  const number = getNumer();
  const correctAnswer = calcAnswer(number);

  userOutput(`Question: ${number}`);

  return userInput('Your answer: ').then((answer) => answer === correctAnswer)
    .catch((msg) => `Error:${msg}`);
};

export { questionOutput, playRound };
