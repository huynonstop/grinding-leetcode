/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let t = num;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      t -= i;
      if (i * i !== num) t -= num / i;
    }
  }
  return t === 1;
};
var checkPerfectNumber = function (num) {
  return [6, 28, 496, 8128, 33550336].includes(num)
};
checkPerfectNumber(1)

// public class Solution {
//   public int pn(int p) { Euclid-Euler Theorem
//       return (1 << (p - 1)) * ((1 << p) - 1);
//   }
//   public boolean checkPerfectNumber(int num) {
//       int[] primes=new int[]{2,3,5,7,13,17,19,31};
//       for (int prime: primes) {
//           if (pn(prime) == num)
//               return true;
//       }
//       return false;
//   }
// }