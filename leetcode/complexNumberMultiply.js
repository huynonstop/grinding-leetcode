/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  const [a, b] = complexToArray(num1);
  const [c, d] = complexToArray(num2);
  return a * c - b * d + '+' + (a * d + b * c) + 'i';
};

const complexToArray = (num) => {
  return num.split('+').map((s) => Number.parseInt(s));
};
