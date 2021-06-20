/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let latest = 0;
  let t = num;
  let i = 1;
  while (t) {
    if (t % 10 === 6) {
      latest = i;
    }
    i *= 10;
    t = Math.floor(t / 10);
  }
  return num + 3 * latest;
};
maximum69Number(9669);
