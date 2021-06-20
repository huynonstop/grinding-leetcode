/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  let hashmap = {};
  let max_size = 0;
  let count = 0;
  for(let i = 1; i <= n;i++) {
    let sum = sumDigits(i)
    hashmap[sum] = hashmap[sum] + 1 || 1;
    if(hashmap[sum] === max_size) {
      count++;
    } else if (hashmap[sum] > max_size) {
      max_size = hashmap[sum];
      count = 1;
    }
  }
  return count;
};

function sumDigits(n) {
  let sum = 0;
  while(n !== 0) {
    sum += n % 10;
    n = Math.floor(n/10);
  }
  return sum;
}