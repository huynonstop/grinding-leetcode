/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0;
  while (nums[left] !== val && left < nums.length) left++;

  let right = nums.length - 1;
  while (nums[right] === val && right >= 0) right--;

  while (left < right) {
    let t = nums[left];
    nums[left] = nums[right];
    nums[right] = t;
    while (nums[left] !== val) left++;
    while (nums[right] === val) right--;
  }
  return right + 1;
};

var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

var removeElement = function (nums, val) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }
  return n;
};
removeElement([3], 2);
