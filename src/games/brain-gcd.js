const getRandomInt = () => Math.floor(Math.random() * 100);

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

export default () => {
  const random1 = getRandomInt();
  const random2 = getRandomInt();
  const answer = calcAnswer(random1, random2);

  const task = 'Find the greatest common divisor of given numbers.';
  const question = `Question: ${random1} ${random2}`;
  const correctAnswer = answer.toString(10);

  return { task, question, correctAnswer };
};
