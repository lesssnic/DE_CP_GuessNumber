const startGameButton = document.querySelector('#generator');
const guessNumberButton = document.querySelector('#guess');
const resetButton = document.querySelector('#exit');
startGameButton.addEventListener('click', startGame);
guessNumberButton.addEventListener('click', guessNumber);
resetButton.addEventListener('click', reset);

const hider = document.querySelector('#main_hide');
const hider2 = document.querySelector('#hiding');
let min = document.querySelector('#minValue');
let max = document.querySelector('#maxValue');
const outputtterError = document.querySelector('#text2');
let user = document.querySelector('#userInput');

let randRes = 0;
let counter = 5;

function startGame() {
       if(Number(min.value) >= Number(max.value) || validateNumber(Number(min.value))|| validateNumber(Number(max.value))){
        return outputtterError.innerHTML = 'Ваш диапазон задан неверно!';
    } else {
        hider.style.display = 'none';
        hider2.style.display = 'block';
        randRes = getRandomNumber(Number(min.value), Number(max.value));
        console.log(randRes);
    }
}

function guessNumber() {
    if (counter > 1) {
        let UserNumber = Number(user.value);
        switch (true) {
            case UserNumber < randRes:
                finalOut.innerHTML = "Значение меньше заданного!";
                break;
            case UserNumber > randRes:
                finalOut.innerHTML = "Значение больше заданного!";
                break;
            default:
                finalOut.innerHTML = "Поздравляю, вы угадали число!";
                guessNumberButton.disabled = true;
                break;
        }
    } else {
        finalOut.innerHTML = "Вы проиграли. У вас не осталось попыток!";
        guessNumberButton.disabled = true;
    }
    counter--;
    user.value = '';
}

function reset() {
    hider.style.display = 'block';
    hider2.style.display = 'none';
    min.value = " ";
    max.value = " ";
    user.value = " ";
    finalOut.innerHTML = " ";
}

function validateNumber(number) {
    if (typeof number !== 'number' || number < 0 || number > 200 || !Number.isInteger(number)) {
        return true;
    } else {
        return false;
    }
}

function getRandomNumber(min, max) {
    if (!(validateNumber(min) && validateNumber(max))) {
        return Math.floor(Math.random() * (max - min) + min);
    } else {
        return null;
    }
}