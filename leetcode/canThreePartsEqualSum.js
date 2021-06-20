/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
  // O(n^2)
  let sum = A.reduce((p, c) => p + c, 0);
  let sumLeft = 0;
  let sumRight = 0;
  for (let i = 0; i < A.length - 2; i++) {
    sumLeft += A[i];
    if (sumLeft * 3 === sum) {
      for (let j = A.length - 1; j >= i + 2; j--) {
        sumRight += A[j];
        if (sumRight === sumLeft) {
          return true;
        }
      }
    }
  }
  return false;
};

var canThreePartsEqualSum = function (A) {
  // O(n)
  let sum = A.reduce((p, c) => p + c, 0);
  let c = 0;
  let part = 0;
  if (sum % 3 !== 0) return false;
  for (let a of A) {
    part += a;
    if (part === sum / 3) {
      c++;
      part = 0;
    }
  }
  return c >= 3;
};
canThreePartsEqualSum([10, -10, 10, -10, 10, -10, 10, -10]);

var canThreePartsEqualSum = function (A) {
  // O(n)
  let sum = A.reduce((p, c) => p + c, 0);
  if (sum % 3 !== 0) return false;
  let left = 1;
  let right = A.length - 2;
  let sumLeft = A[left - 1];
  let sumRight = A[right + 1];
  while (left <= right) {
    if (sumLeft === sumRight && sumLeft === sum / 3) return true;
    if (sumLeft !== sum / 3) sumLeft += A[left++];
    if (sumRight !== sum / 3) sumRight += A[right--];
  }
  return sumLeft === sumRight && sumLeft === sum / 3;
};
canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]);
canThreePartsEqualSum([1, -1, -1, 1]);
