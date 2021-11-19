startGameButton.addEventListener('click', startGame);
guessNumberButton.addEventListener('click', guessNumber);
resetButton.addEventListener('click', reset);
themeButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    }
    else {
        localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
});


let randRes = 0;
let counter = 5;
addDarkClassToHTML();

function startGame() {
    switch (true) {
        case min.value == '' || max.value == '':
            outputterError.innerHTML = 'Ты не заполнили поле';
            break;
        case Number(min.value) >= Number(max.value):
            outputterError.innerHTML = 'Минимальное значение больше максимального или равно ему!';
            min.focus();
            break;
        case validateNumber(Number(min.value)):
            outputterError.innerHTML = `Проверь число ${min.value}. У тебя оно, или меньше 0, или больше 200`;
            min.focus();
            break;
        case validateNumber(Number(max.value)):
            outputterError.innerHTML = `Проверь число ${max.value}. У тебя оно, или меньше 0, или больше 200`;
            max.focus();
            break;
        default:
            hider.style.display = 'none';
            hider2.style.display = 'block';
            resetButton.disabled = false;
            randRes = getRandomNumber(Number(min.value), Number(max.value));
            document.getElementById('output').innerHTML = `Я загадал число. Тебе его нужно отгадать. Введи значение из заданного тобой диапазона: от ${min.value} до ${max.value}`;
    }
}

function guessNumber() {
    if (counter > 1 && user.value == '') {
        finalOut.innerHTML = 'Твое значение пустое! Введи значение из заданного диапазона!';
    } else if (counter > 1) {
        let userNumber = Number(user.value);
        createFinishing(counter);
        switch (true) {
            case (userNumber > Number(max.value) || userNumber < Number(min.value)): finalOut.innerHTML = 'Число вне заданного диапазона';
                break;
            case userNumber < randRes:
                counter--;
                finalOut.innerHTML = `Значение меньше заданного! У тебя остались ${counter} попытк${createFinishing(counter)}`;
                break;
            case userNumber > randRes:
                counter--;
                finalOut.innerHTML = `Значение больше заданного! У тебя остались ${counter} попытк${createFinishing(counter)}`;
                break;
            default:
                finalOut.innerHTML = 'Поздравляю, ты угадал число!';
                guessNumberButton.disabled = true;
                setTimeout(reset, 1500);
                break;
        }
    } else {
        finalOut.innerHTML = 'Ты проиграл. У тебя не осталось попыток!';
        guessNumberButton.disabled = true;
        setTimeout(reset, 1500);
    }
    user.value = '';
}
function reset() {
    hider.style.display = 'block';
    hider2.style.display = 'none';
    min.focus();
    min.value = '';
    max.value = '';
    user.value = '';
    finalOut.innerHTML = '';
    outputterError.innerHTML = '';
    guessNumberButton.disabled = false;
    counter = 5;
}

function addDarkClassToHTML() {
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
}