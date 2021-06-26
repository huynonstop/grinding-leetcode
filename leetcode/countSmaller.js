// https://leetcode.com/problems/count-of-smaller-numbers-after-self/discuss/76583/11ms-JAVA-solution-using-merge-sort-with-explanation
// https://leetcode.com/problems/count-of-smaller-numbers-after-self/discuss/445769/merge-sort-CLEAR-simple-EXPLANATION-with-EXAMPLES-O(n-lg-n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const rs = [];
  const count = Array(nums.length).fill(0);
  const indexes = nums.map((v, i) => i);
  const mergeSort = (left, right) => {
    if (left >= right) return;
    const mid = (left + right) >> 1;
    mergeSort(left, mid);
    mergeSort(mid + 1, right);
    merge(left, right);
  };
  const merge = (left, right) => {
    const mid = (left + right) >> 1;
    let i = left;
    let j = mid + 1;
    let rightCount = 0;
    const newIndexes = [];
    let sortIndex = 0;
    while (i <= mid && j <= right) {
      if (nums[indexes[j]] < nums[indexes[i]]) {
        newIndexes[sortIndex] = indexes[j];
        rightCount++;
        j++;
      } else {
        newIndexes[sortIndex] = indexes[i];
        count[indexes[i]] += rightCount;
        i++;
      }
      sortIndex++;
    }
    while (i <= mid) {
      newIndexes[sortIndex] = indexes[i];
      count[indexes[i]] += rightCount;
      i++;
      sortIndex++;
    }
    while (j <= right) {
      newIndexes[sortIndex] = indexes[j];
      sortIndex++;
      j++;
    }
    for (let i = left; i <= right; i++) {
      indexes[i] = newIndexes[i - left];
    }
  };
  mergeSort(0, nums.length - 1);
  for (let i = 0; i < count.length; i++) {
    rs.push(count[i]);
  }
  return rs;
};
countSmaller([5, 2, 6, 1]);
