/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  let stack = [];
  for (const c of S) {
    if (c === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.length;
};
var minAddToMakeValid = function (S) {
  let rs = 0;
  let balance = 0;
  for (const c of S) {
    balance += c === '(' ? 1 : -1;
    if (balance == -1) {
      rs++;
      balance++;
    }
  }
  return rs + balance;
};

minAddToMakeValid('(((');
