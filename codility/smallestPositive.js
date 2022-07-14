// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const set = new Set(A);
  let i = 1;
  while (true) {
    if (set.has(i)) {
      i += 1;
    } else {
      return i;
    }
  }
}
