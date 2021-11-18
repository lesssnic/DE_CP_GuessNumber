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
let outputterError = document.querySelector('#text2');
let user = document.querySelector('#userInput');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');

let randRes = 0;
let counter = 5;
addDarkClassToHTML();

function startGame() {
    switch (true) {
        case min.value == '' || max.value == '':
            outputterError.innerHTML = 'Вы не заполнили поле';
            break;
        case Number(min.value) >= Number(max.value):
            outputterError.innerHTML = 'Минимальное значение больше максимального или равно ему!';
            break;
        case validateNumber(Number(min.value)):
            outputterError.innerHTML = testValidNum(Number(min.value));
            break;
        case validateNumber(Number(max.value)):
            outputterError.innerHTML = testValidNum(Number(max.value));
            break;
        default:
            hider.style.display = 'none';
            hider2.style.display = 'block';
            resetButton.disabled = false;
            randRes = getRandomNumber(Number(min.value), Number(max.value));
            document.getElementById('output').innerHTML = `Введите значение из заданного вами диапазона: от ${min.value} до ${max.value}`
            console.log(randRes);
    }
}

function guessNumber() {
    if (counter > 1 && user.value == '') {
        finalOut.innerHTML = "Ваше значение пустое! Введите значение из заданного диапазона!";
    } else if (counter > 1) {
        counter--;
        let UserNumber = Number(user.value);
        createFinishing(counter);
        switch (true) {
            case UserNumber < randRes:
                finalOut.innerHTML = `Значение меньше заданного! У вас остались ${counter} попытк${createFinishing(counter)}`;
                break;
            case UserNumber > randRes:
                finalOut.innerHTML = `Значение больше заданного! У вас остались ${counter} попытк${createFinishing(counter)}`;
                break;
            default:
                finalOut.innerHTML = "Поздравляю, вы угадали число!";
                guessNumberButton.disabled = true;
                setTimeout(reset, 1500);
                break;
        }
    } else {
        finalOut.innerHTML = "Вы проиграли. У вас не осталось попыток!";
        guessNumberButton.disabled = true;
        setTimeout(reset, 1500);
    }
    user.value = '';
}

function createFinishing(element) {
    if (element == 4 || element == 3 || element == 2) {
        return 'и';
    }
    else {
        return 'а';
    }
}

function reset() {
    hider.style.display = 'block';
    hider2.style.display = 'none';
    min.focus();
    min.value = "";
    max.value = "";
    user.value = "";
    finalOut.innerHTML = "";
    outputterError.innerHTML = "";
    guessNumberButton.disabled = false;
    counter = 5;
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

document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    }
    else {
        localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
});

function addDarkClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.add('dark');
            resetButton.classList.add('dark');
            sun.style.display = 'none';
            moon.style.display = 'inline';
        }
        else {
            document.querySelector('html').classList.remove('dark');
            resetButton.classList.remove('dark');
            sun.style.display = 'inline';
            moon.style.display = 'none';
        }
    } catch (err) { }
}

function testValidNum(number) {
    return `Проверьте число ${number}. У вас оно, или меньше 0, или больше 200`;
}