const getRandomInt = () => Math.floor(Math.random() * 100);

const questionOutput = (userOutput) => userOutput('What is the result of the expression?');

const plus = '+';
const minus = '-';
const mult = '*';

const getOperation = () => {
  const operationsArray = [plus, minus, mult];
  return operationsArray[getRandomInt() % operationsArray.length];
};

const calcAnswer = (val1, val2, oper) => {
  switch (oper) {
    case plus:
      return val1 + val2;
    case minus:
      return val1 - val2;
    case mult:
      return val1 * val2;
    default:
      throw new Error(`Unknown operation: ${oper}`);
  }
};

const playRound = (userOutput, userInput) => {
  const random1 = getRandomInt();
  const random2 = getRandomInt();
  const operation = getOperation();
  const correctAnswer = calcAnswer(random1, random2, operation);

  userOutput(`Question: ${random1} ${operation} ${random2}`);
  return userInput('Your answer: ').then((userAnswer) => {
    const answer = parseInt(userAnswer, 10);
    return answer === correctAnswer;
  })
    .catch((msg) => `Error:${msg}`);
};

export { questionOutput, playRound };
