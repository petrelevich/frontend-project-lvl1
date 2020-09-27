const getRandomInt = () => Math.floor(Math.random() * 100);
const questionOutput = (userOutput) => userOutput('Find the greatest common divisor of given numbers.');

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

const playRound = (userOutput, userInput) => {
  const random1 = getRandomInt();
  const random2 = getRandomInt();
  const correctAnswer = calcAnswer(random1, random2);

  userOutput(`Question: ${random1} ${random2}`);

  return userInput('Your answer: ').then((answer) => parseInt(answer, 10) === correctAnswer)
    .catch((msg) => `Error:${msg}`);
};

export { questionOutput, playRound };
