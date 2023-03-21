const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') ||
         (choice === 'rock' && computerChoice === 'lizard') ||
         (choice === 'paper' && computerChoice === 'rock') ||
         (choice === 'paper' && computerChoice === 'spock') ||
         (choice === 'scissors' && computerChoice === 'paper') ||
         (choice === 'scissors' && computerChoice === 'lizard') ||
         (choice === 'lizard' && computerChoice === 'paper') ||
         (choice === 'lizard' && computerChoice === 'spock') ||
         (choice === 'spock' && computerChoice === 'rock') ||
         (choice === 'spock' && computerChoice === 'scissors');
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}

while (true) {
  prompt(`Choose one: Enter 'r' for rock,
                     'p' for paper,
                     'x' for scissors,
                     's' for spock,
                     'l' for lizard`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}