/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const hashmap = new Map();
  let maxDegree = 0;
  let minLength = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (hashmap.has(nums[i])) {
      hashmap.get(nums[i])[1]++;
    } else {
      hashmap.set(nums[i], [i,1]);
    }
    const [first,newLength] = hashmap.get(nums[i]);
    if(maxDegree < newLength) {
      maxDegree = newLength;
      minLength = i - first + 1;
    } else if (maxDegree === newLength) {
      minLength = Math.min(minLength, i - first + 1)
    }
  }
  return minLength;
};
