let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const resultText = document.getElementById('result-text');

    if (playerSelection === computerSelection) {
        resultText.textContent = `It's a tie! You both chose ${playerSelection}.`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        resultText.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        resultText.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    updateScore();
}

function updateScore() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('result-text').textContent = '';
    updateScore();
}

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        playRound(playerSelection);
    });
});

document.getElementById('reset').addEventListener('click', resetGame);
