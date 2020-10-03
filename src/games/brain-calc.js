import getRandomInt from './generator.js';

const plus = '+';
const minus = '-';
const mult = '*';

const getOperation = () => {
  const operations = [plus, minus, mult];
  return operations[getRandomInt() % operations.length];
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

const getTask = () => 'What is the result of the expression?';

const getDataForRound = () => {
  const random1 = getRandomInt();
  const random2 = getRandomInt();
  const operation = getOperation();

  const question = `${random1} ${operation} ${random2}`;
  const correctAnswer = calcAnswer(random1, random2, operation).toString(10);

  return { question, correctAnswer };
};

export { getTask, getDataForRound };
