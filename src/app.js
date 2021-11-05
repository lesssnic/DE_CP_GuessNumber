const startGameButton = document.querySelector('#generator');
const guessNumberButton = document.querySelector('#guess');
    startGameButton.addEventListener('click', startGame);
    guessNumberButton.addEventListener('click', guessNumber);

function startGame () {
    console.log('start');
}

function guessNumber () {
    console.log('guess');
}