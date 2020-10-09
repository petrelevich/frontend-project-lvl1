import readlineSync from 'readline-sync';

const roundCount = 3;

const userOutput = (data) => {
  console.log(data);
};

const userInput = (prompt) => readlineSync.question(prompt);

export default (game) => {
  userOutput('Welcome to the Brain Games!');
  const userName = userInput('May I have your name? ');
  userOutput(`Hello, ${userName}!`);

  userOutput(game.task);

  for (let correctAnswerCount = 0; correctAnswerCount < roundCount; correctAnswerCount += 1) {
    const { question, correctAnswer } = game.getDataForRound();
    userOutput(`Question: ${question}`);
    const answer = userInput('Your answer: ');

    if (answer === correctAnswer) {
      userOutput('Correct!');
    } else {
      userOutput(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      userOutput(`Let's try again, ${userName}!`);
      return;
    }
  }
  userOutput(`Congratulations, ${userName}!`);
};
