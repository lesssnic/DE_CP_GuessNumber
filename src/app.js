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
    if (Number(min.value) >= Number(max.value)) {
        return outputtterError.innerHTML = 'Ваш диапазон задан неверно!';
    } else {
        hider.style.display = 'none';
        hider2.style.display = 'block';
    }
    console.log(Number(min.value), Number(max.value));
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