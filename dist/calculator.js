const convertToNumber = (a) => {
    return (Number(a));
};
const calculator = (a, b, op) => {
    const newX = convertToNumber(a);
    const newY = convertToNumber(b);
    if (isNaN(newX) || isNaN(newY)) {
        return (`please give an integer for ${isNaN(newX) ? 'X' : 'Y'}`);
    }
    else {
        switch (op) {
            case 'addition':
                return newX + newY;
            case 'subtraction':
                return newX - newY;
            case 'multiplication':
                return newX * newY;
            default:
                throw new Error('Operation is not add, subtract or multiply!');
        }
    }
};
module.exports = calculator;
