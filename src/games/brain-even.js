const randomInt = () => Math.floor(Math.random() * 100);

export default () => {
  const random = randomInt();
  const even = random % 2 === 0;

  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = `Question: ${random}`;
  const correctAnswer = even ? 'yes' : 'no';

  return { task, question, correctAnswer };
};
