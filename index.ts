import inquirer from 'inquirer';

type Choice = 'rock' | 'paper' | 'scissors';

// Get a random choice for the computer
function getRandomChoice(): Choice {
  const choices: Choice[] = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine the winner based on the player's choice and the computer's choice
function determineWinner(playerChoice: Choice, computerChoice: Choice): string {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Prompt the player for their choice and play the game
async function playGame() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'playerChoice',
      message: 'Choose rock, paper, or scissors:',
      choices: ['rock', 'paper', 'scissors'],
    },
  ]);

  const playerChoice = answers.playerChoice as Choice;
  const computerChoice = getRandomChoice();

  console.log(`Computer chose ${computerChoice}`);
  console.log(determineWinner(playerChoice, computerChoice));
}

console.log('Welcome to Rock, Paper, Scissors!');
playGame();
