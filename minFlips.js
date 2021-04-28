/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  let bit = ['0', '1'];
  let current = 0;
  let count = 0;
  for (let i = 0; i < target.length; i++) {
    if (target[i] !== bit[current]) {
      count++;
      current ^= 1;
    }
  }
  return count;
};

function minFlips(target) {
  let ans = target[0] - '0';
  for (let i = 1; i < target.length; i++) if (target[i] !== target[i - 1]) ans++;
  return ans;
}
minFlips('10111');
