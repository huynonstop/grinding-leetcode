/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  arr.sort((a,b) => a-b);
  let n = arr.length;
  let sum = 0;
  let start = Math.round(n/20);
  let end = Math.round(n - n/20);
  let count = 0;
  for(let i = start; i < end;i++) {
    sum+= arr[i];
    count++;
  }
  return sum / count;
};