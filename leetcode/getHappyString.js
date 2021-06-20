/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  const stack = [''];
  let chars = ['c', 'b', 'a'];
  let pre;
  while (stack.length) {
    pre = stack.pop();
    if (pre.length === n) {
      k--;
      if (!k) return pre;
    } else
      for (const c of chars) {
        if (pre[pre.length - 1] !== c) {
          stack.push(pre + c);
        }
      }
  }
  return '';
};
getHappyString(1, 3);
