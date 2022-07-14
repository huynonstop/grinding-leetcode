// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const n = A.length;
  const step = K % n;
  const rotatedArray = Array(n);
  for (let i = 0; i < n; i++) {
    const newIndex = (i + step) % n;
    rotatedArray[newIndex] = A[i];
  }
  return rotatedArray;
}
