import readlineSync from 'readline-sync';

const inputUserName = () => readlineSync.question('May I have your name? ');

const rounds = 3;

export default (gameName) => {
  const modulePath = `./games/${gameName}.js`;

  import(modulePath)
    .then((module) => {
      console.log('Welcome to the Brain Games!');
      const userName = inputUserName();
      console.log(`Hello, ${userName}!`);
      module.questionOutput();

      for (let correctNo = 0; correctNo < rounds; correctNo += 1) {
        const result = module.playRound();
        if (result) {
          console.log('Correct!');
        } else {
          return;
        }
      }
      console.log(`Congratulations, ${userName}!`);
    })
    .catch(() => new Error(`Unknown game name: ${gameName}`));
};
