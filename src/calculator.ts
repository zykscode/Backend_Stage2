type Operation = 'multiplication' | 'addition' | 'subtraction';
type Result = number;

const calculator = (a: number, b: number, op: Operation): Result => {
  switch (op) {
    case 'addition':
      return a + b;
    case 'subtraction':
      return a - b;
    case 'multiplication':
      return a * b;
    default:
      throw new Error('Operation is not add, subtract or multiply!');
  }
}



module.exports = calculator