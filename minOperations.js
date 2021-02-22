/**
 * @param {string} boxes
 * @return {number[]}
 */

// left sum + right sum
var minOperations = function (boxes) {
  const answer = Array(boxes.length);
  answer[0] = 0;
  let rBall = 0;
  let lBall = 0;
  for (let i = 1; i < boxes.length; i++) {
    if (boxes[i] === '1') {
      rBall++;
      answer[0] += i;
    }
  }
  for (let i = 1; i < boxes.length; i++) {
    let cur = answer[i - 1];
    if (boxes[i] === '1') {
      cur--;
      rBall--;
    }
    if (boxes[i - 1] === '1') {
      lBall++;
    }
    answer[i] = cur + lBall - rBall;
  }
  return answer;
};

// LTR + RTL
var minOperations = function (boxes) {
  const answer = Array(boxes.length).fill(0);
  for (let i = 0, operations = 0, count = 0; i < boxes.length; i++) {
    answer[i] += operations;
    count += boxes[i] === '1' ? 1 : 0;
    operations += count;
  }
  for (let i = boxes.length - 1, operations = 0, count = 0; i >= 0; i--) {
    answer[i] += operations;
    count += boxes[i] === '1' ? 1 : 0;
    operations += count;
  }
  return answer;
};
