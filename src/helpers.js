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
function createFinishing(element) {
    if (element == 4 || element == 3 || element == 2) {
        return 'и';
    }
    else {
        return 'а';
    }
}