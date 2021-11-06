
const startGameButton = document.querySelector('#generator');
const guessNumberButton = document.querySelector('#guess');
const resetButton = document.querySelector('#exit');
    startGameButton.addEventListener('click', startGame);
    guessNumberButton.addEventListener('click', guessNumber);
    resetButton.addEventListener('click', reset);

function startGame () {
    console.log('start');
}

function guessNumber () {
    console.log('guess');
}

function reset () {
    console.log('reset');
}