import readlineSync from 'readline-sync';

const roundsCount = 3;

const outputUserData = (data) => {
  console.log(data);
};

const userInput = (prompt) => readlineSync.question(prompt);

export default (game) => {
  outputUserData('Welcome to the Brain Games!');
  const userName = userInput('May I have your name? ');
  outputUserData(`Hello, ${userName}!`);

  outputUserData(game.task);

  for (let correctAnswersCount = 0; correctAnswersCount < roundsCount; correctAnswersCount += 1) {
    const { question, correctAnswer } = game.getDataForRound();
    outputUserData(`Question: ${question}`);
    const answer = userInput('Your answer: ');

    if (answer === correctAnswer) {
      outputUserData('Correct!');
    } else {
      outputUserData(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      outputUserData(`Let's try again, ${userName}!`);
      return;
    }
  }
  outputUserData(`Congratulations, ${userName}!`);
};
