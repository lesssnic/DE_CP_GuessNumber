function validateNumber(number) {
    return (typeof number !== 'number' || number < 0 || number > 200 || !Number.isInteger(number));
}
function getRandomNumber(min, max) {
    return (!(validateNumber(min) && validateNumber(max)))?Math.floor(Math.random() * (max - min) + min):null;
}
function createFinishing(element) {
    return (element == 4 || element == 3 || element == 2)?'и':'а';
}