/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let c5 = 0,
    c10 = 0;
  for (let b of bills) {
    if (b === 5) {
      c5++;
    } else if (b === 10) {
      c5--;
      c10++;
    } else if (c10 > 0) {
      c10--;
      c5--;
    } else {
      c5 -= 3;
    }
    if (c5 < 0) return false;
  }
  return true;
};
lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 20, 5]);
