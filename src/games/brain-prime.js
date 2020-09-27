const getRandomInt = () => Math.floor(Math.random() * 100);

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

export default () => {
  const number = getNumer();
  const answer = calcAnswer(number);

  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = `Question: ${number}`;
  const correctAnswer = answer;

  return { task, question, correctAnswer };
};
