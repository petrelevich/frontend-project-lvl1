const getRandomInt = () => Math.floor(Math.random() * 100);

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

export default () => {
  const random1 = getRandomInt();
  const random2 = getRandomInt();
  const operation = getOperation();

  const task = 'What is the result of the expression?';
  const question = `Question: ${random1} ${operation} ${random2}`;
  const correctAnswer = calcAnswer(random1, random2, operation).toString(10);

  return { task, question, correctAnswer };
};
