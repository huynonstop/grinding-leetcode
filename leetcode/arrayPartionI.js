/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  let rs = 0;
  nums.sort((a,b) => a-b);
  for(let i = 0; i < nums.length;i+=2) {
    rs += nums[i]
  }
  return rs;
};

var arrayPairSumBucket = function(nums) {
  let rs = 0;
  let min = Number.MAX_VALUE;
  let max = nums[0]
  let exist = new Array(20001).fill(0);
  for(let i = 0; i< nums.length;i++) {
    exist[nums[i] + 10000]++;
    if(min > nums[i]) min = nums[i]
    if(max < nums[i]) max = nums[i]
  }
  min += 10000;
  max += 10000;
  let odd = true;
  for(let i = min;i<= max;i++) {
    while (exist[i] > 0) {
      if (odd) {
        sum += i - 10000;
      }
      odd = !odd;
      exist[i]--;
    }
  }
  return rs;
}

arrayPairSumBucket([1,4,3,2])