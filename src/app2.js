import * as helpers from './helpers.js';

const getDOM = {
    attemptsField: document.querySelector('#attempts'),
    attemptsLeftField: document.querySelector('#attempts>span'),
    initialField: document.querySelector('#initial'),
    initial2Field: document.querySelector('#initial2'),
    initial3Field: document.querySelector('#initial3'),
    rules: document.querySelector('#rules'),
    rules2: document.querySelector('#rules2'),
    minInput: document.querySelector('#minValue'),
    maxInput: document.querySelector('#maxValue'),
    guessInput: document.querySelector('#guessInput'),
    guessButton: document.querySelector('#guessButton'),
    beginButton: document.querySelector('#generator'),
    messageField: document.querySelector('#rules2'),
    resetButton: document.querySelector('#resetButton')
};
 const defaultValues = {
    counter: 5,
    rules1Text: 'Hello, let\'s play a simple game.',
    rules2Text: 'You have 5 attempts to guess the number that I am guessing.',
    rules3Text: 'First, choose a range from 0 to 200',
    rules4Text: 'Enter a value in the field on the right and try to guess the number'
 };
 const notifications = {
     minMoreMax: 'min value bigger than max value',
     range: 'out of range',
     equal: 'min equal max',
     wrongData: 'fill only numbers from 0 to 200',
     error: 'error'
 };
const gameNotification = {
    bigger: 'take bigger',
    lower: 'take lower',
    warmer: 'warmer',
    colder: 'colder',
    hot: 'hot',
    frostily: 'frostily',
    aim: 'YOU ARE WIN!!!',
    lose: 'YOU ARE LOSE!'
};
let randomNumber = null;
let previousAttempt = null;
let counter = defaultValues.counter;

getDOM.rules.innerHTML = `<p>${defaultValues.rules1Text}</p><p>${defaultValues.rules2Text}</p><p>${defaultValues.rules3Text}</p>`
getDOM.rules2.innerHTML = defaultValues.rules4Text;

getDOM.beginButton.addEventListener('click', initialGame);
getDOM.guessButton.addEventListener('click', guessNumber);
getDOM.resetButton.addEventListener('click', prevWindow);

function initialGame (e, min = Number(getDOM.minInput.value), max = Number(getDOM.maxInput.value)) {
    e.preventDefault();
    randomNumber = helpers.getRandomNumber(min, max);
    (randomNumber)?nextWindow():notificator(min,max);
    getDOM.guessInput.focus();
    getDOM.attemptsLeftField.innerHTML = counter;
}

function guessNumber (e, effortNumber = Number(getDOM.guessInput.value)) {
    e.preventDefault();
    (helpers.validateNumber(effortNumber))?getDOM.messageField.innerHTML = gameNotificator(effortNumber): getDOM.messageField.innerHTML = notificator(effortNumber);
    getDOM.attemptsLeftField.innerHTML = --counter;
    getDOM.guessInput.value = '';
    if (counter === 0) showResetNumber();
}

function showResetNumber () {
    getDOM.initial2Field.classList.add('hide');
    getDOM.initial3Field.classList.remove('hide');
    getDOM.resetButton.focus();
}

function gameNotificator (effortNumber) {
    switch (true){
        case (counter === 1): return gameNotification.lose;
        case (effortNumber > 200 || effortNumber < 0): return gameNotification.frostily;
        case (effortNumber === randomNumber): return gameNotification.aim;
        case (effortNumber > randomNumber): return gameNotification.lower;
        case (effortNumber < randomNumber): return gameNotification.bigger;
        default: return gameNotification.frostily;
    }
}
function notificator (min, max) {
    switch (true) {
        case (typeof min !== 'number'): return notifications.wrongData;
        case (typeof min !== 'number' || typeof max !== 'number'): return notifications.wrongData;
        case (min === max): return notifications.equal;
        case (min > max): return notifications.minMoreMax;
        case (min < 0 || max > 200): return notifications.range;
        default: return notifications.error;
    }
}
function nextWindow () {
    getDOM.rules.classList.add('hide');
    getDOM.rules2.classList.remove('hide');
    getDOM.initialField.classList.add('hide');
    getDOM.initial2Field.classList.remove('hide');
    getDOM.attemptsField.classList.remove('hide');
}
function prevWindow (e) {
    e.preventDefault();
    getDOM.rules.classList.remove('hide');
    getDOM.rules2.classList.add('hide');
    getDOM.initialField.classList.remove('hide');
    getDOM.initial2Field.classList.add('hide');
    getDOM.initial3Field.classList.add('hide');
    getDOM.messageField.innerHTML = defaultValues.rules4Text;
    getDOM.attemptsField.classList.add('hide');
    randomNumber = null;
    counter = defaultValues.counter;
    getDOM.beginButton.focus();
}

