import getRandomInt from '../utils/generator.js';

const plus = '+';
const minus = '-';
const mult = '*';

const getOperation = () => {
  const oper = [plus, minus, mult];
  return oper[getRandomInt() % oper.length];
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

const task = 'What is the result of the expression?';

const getDataForRound = () => {
  const random1 = getRandomInt();
  const random2 = getRandomInt();
  const operation = getOperation();

  const question = `${random1} ${operation} ${random2}`;
  const correctAnswer = calcAnswer(random1, random2, operation).toString(10);

  return { question, correctAnswer };
};

export { task, getDataForRound };
