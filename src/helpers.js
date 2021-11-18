export function validateNumber(number) {
    return (typeof number === 'number' && number >= 0 && number <= 200 && Number.isInteger(number))
}
export function getRandomNumber(min, max) {
    return ((validateNumber(min) && validateNumber(max)) && min < max)?Math.floor(Math.random() * (max - min) + min):null;
}
