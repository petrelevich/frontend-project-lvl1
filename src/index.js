import readlineSync from 'readline-sync';

const rounds = 3;

const userOutput = (data) => {
  console.log(data);
};

const userInput = (gamePrompt) => readlineSync.question(gamePrompt);

export default (game) => {
  userOutput('Welcome to the Brain Games!');
  const userName = userInput('May I have your name? ');
  userOutput(`Hello, ${userName}!`);

  userOutput(game.getTask());

  for (let correctNo = 0; correctNo < rounds; correctNo += 1) {
    const dataForRound = game.getDataForRound();
    userOutput(`Question: ${dataForRound.question}`);
    const answer = userInput('Your answer: ');

    if (answer === dataForRound.correctAnswer) {
      userOutput('Correct!');
    } else {
      return;
    }
  }
  userOutput(`Congratulations, ${userName}!`);
};
