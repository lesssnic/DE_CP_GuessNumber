const startGameButton = document.querySelector('#generator');
const guessNumberButton = document.querySelector('#guess');
const resetButton = document.querySelector('#exit');
startGameButton.addEventListener('click', startGame);
guessNumberButton.addEventListener('click', guessNumber);
resetButton.addEventListener('click', reset);

function startGame() {
    console.log('start');
}

function guessNumber() {
    console.log('guess');
}

function reset() {
    console.log('reset');
}

function validateNumber(number) {
    if (typeof number !== 'number' || number < 0 || number > 200 || !Number.isInteger(number)) {
        return false;
    } else {
        return true;
    }
}

function getRandomNumber(min, max) {
    if (validateNumber(min) && validateNumber(max)) {
        return Math.floor(Math.random() * (max - min) + min);
    } else {
        return null;
    }
}