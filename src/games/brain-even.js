const randomInt = () => Math.floor(Math.random() * 100);

const questionOutput = (userOutput) => userOutput('Answer "yes" if the number is even, otherwise answer "no".');

const playRound = (userOutput, userInput) => {
  const random = randomInt();
  const even = random % 2 === 0;
  userOutput(`Question: ${random}`);
  return userInput('Your answer: ').then((answer) => (answer === 'yes' && even) || (answer === 'no' && !even))
    .catch((msg) => `Error:${msg}`);
};

export { questionOutput, playRound };
