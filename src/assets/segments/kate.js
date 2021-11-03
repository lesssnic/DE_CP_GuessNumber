export function validateNumber(number) {
    if (typeof number !== 'number' || number <= 0 || number > 200 || !Number.isInteger(number)) {
        return 'false'
    }
    return 'true'
}
console.log(validateNumber(10));

export function getRandomNumber(min, max) {
    const number = Math.ceil(Math.random() * (max - min) + min);
    if (validateNumber(min) && validateNumber(max)) {
        return number;
    } else {
        return 'error'
    }
}
console.log(getRandomNumber(1, 200));