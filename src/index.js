//import readlineSync from 'readline-sync';

const rounds = 3;

const userOutput = (data) => {
  console.log(data);
};

//let prompt = '';

//const userInput = (prompt) => readlineSync.question(prompt);

const userInput = (gamePrompt) => import('readline-sync')
  .then((module) => module.default.question(gamePrompt))
  .catch((msg) => new Error(`readline-sync loading error: ${msg}`));

//const getUserInput = (prompt) => readlineSync.question(prompt);

const playRound = (userName, module, correctNo) => {
  module.playRound(userOutput, userInput).then((result) => {
    if (result) {
      userOutput('Correct!');
      if (correctNo === rounds) {
        userOutput(`Congratulations, ${userName}!`);
      } else {
        playRound(userName, module, correctNo + 1);
      }
    }
  })
    .catch((msg) => `Error:${msg}`);
};

export default (gameName) => {
  const modulePath = `./games/${gameName}.js`;

  import(modulePath)
    .then((module) => {
      userOutput('Welcome to the Brain Games!');
      userInput('May I have your name? ').then((userName) => {
        userOutput(`Hello, ${userName}!`);
        module.questionOutput(userOutput);
        playRound(userName, module, 1);
      })
        .catch((msg) => `Error:${msg}`);
    })
    .catch(() => new Error(`Unknown game name: ${gameName}`));
};
