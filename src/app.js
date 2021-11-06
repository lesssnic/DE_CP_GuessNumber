const startGameButton = document.querySelector('#generator');
const guessNumberButton = document.querySelector('#guess');
const resetButton = document.querySelector('#exit');
startGameButton.addEventListener('click', startGame);
guessNumberButton.addEventListener('click', guessNumber);
resetButton.addEventListener('click', reset);

const hider = document.querySelector('#main_hide');
const hider2 = document.querySelector('#hiding');
const min = document.querySelector('#minValue');
const max = document.querySelector('#maxValue');
const outputtterError = document.querySelector('#text2');

function startGame() {
    console.log(Number(min.value), Number(max.value));
    console.log('start');
    if (Number(min.value) >= Number(max.value) || (min.value < 0 || max.value < 0) || (min.value > 200 || max.value > 200)) {
        return outputtterError.innerHTML = 'Ваш диапазон задан неверно!';
    } else {
        hider.style.display = 'none';
        hider2.style.display = 'block';
        return getRandomNumber(Number(min.value), Number(max.value));
    }

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