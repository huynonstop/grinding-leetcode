// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let t = N;
  let i1 = null;
  let i = 0;
  while (t) {
    const bin = t % 2;
    if (bin === 1) {
      i1.push(i);
    }
    i += 1;
    t = t >> 1;
  }

  if (i1.length === 1) return 0;
  let rs = 0;
  for (let j = 1; j < i1.length; j++) {
    rs = max(i1[j] - i1[j - 1] - 1);
  }
  return rs;
}
