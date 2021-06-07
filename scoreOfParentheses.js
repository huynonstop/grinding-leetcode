/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  let stack = [0];
  for (let c of s) {
    if (c === '(') {
      stack.push(0);
    } else {
      let c = stack.pop();
      let b = stack.pop();
      stack.push(b + Math.max(2 * c, 1));
    }
  }
  return stack.pop();
};
