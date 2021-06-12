/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let i = 0;
  let j = 0;
  let s = [];
  while (i < pushed.length || j < popped.length) {
    const top = peek(s);
    if (j < popped.length && top === popped[j]) {
      s.pop();
      j++;
    } else if (i < pushed.length) {
      s.push(pushed[i]);
      i++;
    } else {
      return false;
    }
  }
  return true;
};

var peek = (s) => {
  return s.length ? s[s.length - 1] : null;
};

validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]);
