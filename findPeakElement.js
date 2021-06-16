/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return i;
  }
  return nums.length - 1;
};

var findPeakElement = function (nums) {
  const binarySearch = (l, r) => {
    if (l == r) return l;
    let mid = (l + r) >> 1;
    if (nums[mid] > nums[mid + 1]) {
      return binarySearch(l, mid);
    }
    return binarySearch(mid + 1, r);
  };
  return binarySearch(0, nums.length - 1);
};

var findPeakElement = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    let mid = (l + r) / 2;
    if (nums[mid] > nums[mid + 1]) r = mid;
    else l = mid + 1;
  }
  return l;
};
