const score = JSON.parse(localStorage.getItem
('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}
let randomNumber = -1;
let computerMove = '';

document.querySelector('.rock-button').addEventListener('click', () => jokenpo('rock'));
document.querySelector('.paper-button').addEventListener('click', () => jokenpo('paper'));
document.querySelector('.scissors-button').addEventListener('click', () => jokenpo('scissors'));


updateScoreElement();

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, 
        Losses ${score.losses}, ties ${score.ties}`
}

function jokenpo(plrMove){
    randnum = Math.random();
    let result = '';
    if (plrMove == 'rock') {
        if (randnum <= 1/3) {
            pcMove = 'rock';
            result = 'Tie!'
            score.ties += 1;
        } else if (1/3 < randnum && randnum <= 2/3) {
            pcMove = 'paper';
            result = 'You Lose!';
            score.losses += 1;
        } else if (randnum > 2/3) {
            pcMove = 'scissors';
            result = 'You Win!';
            score.wins += 1;
        }

    } else if (plrMove == 'paper') {
        if (randnum <= 1/3) {
            pcMove = 'rock';
            result = 'You Win!';
            score.wins += 1;
        } else if (1/3 < randnum && randnum <= 2/3) {
            pcMove = 'paper';
            result = 'Tie!'
            score.ties += 1;
        } else if (randnum > 2/3) {
            pcMove = 'scissors';
            result = 'You Lose!';
            score.losses += 1;
        }

    } else if (plrMove == 'scissors') {
        if (randnum <= 1/3) {
            pcMove = 'rock';
            result = 'You Lose!';
            score.losses += 1;
        } else if (1/3 < randnum && randnum <= 2/3) {
            pcMove = 'paper';
            result = 'You Win!';
            score.wins += 1;
        } else if (randnum > 2/3) {
            pcMove = 'scissors';
            result = 'Tie!'
            score.ties += 1;
        }
    }
    document.querySelector('.js-result')
        .innerHTML = result;

    document.querySelector('.your-move')
        .innerHTML = `
        You
        <img src="emojis-icons/${plrMove}-emoji.png" class="result-icon">`;

        document.querySelector('.pc-move')
        .innerHTML = `
        <img src="emojis-icons/${pcMove}-emoji.png" class="result-icon">
        Computer`;
    updateScoreElement();

    localStorage.setItem('score', JSON.stringify(score));
};

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying){
        intervalId = setInterval(function () {
            randnum = Math.random();
            if (randnum < 1/3) {
                jokenpo('rock');
            } else if (1/3 < randnum && randnum <= 2/3) {
                jokenpo('paper');
            } else if (randnum > 2/3) {
                jokenpo('scissors');
            }
        }, 1500);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false
    }
}