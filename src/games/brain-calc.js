import readlineSync from 'readline-sync';

const getRandomInt = () => Math.floor(Math.random() * 100);
const inputAnswer = () => readlineSync.question('Your answer: ');

const questionOutput = () => console.log('What is the result of the expression?');

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

const playRound = () => {
  const random1 = getRandomInt();
  const random2 = getRandomInt();
  const operation = getOperation();
  const correctAnswer = calcAnswer(random1, random2, operation);

  console.log(`Question: ${random1} ${operation} ${random2}`);
  const answer = parseInt(inputAnswer(), 10);

  return answer === correctAnswer;
};

export { questionOutput, playRound };
