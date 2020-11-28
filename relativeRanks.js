/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  let index = nums.map((v, i) => i);
  index.sort((a, b) => nums[b] - nums[a]);
  let ranks = [];
  index.forEach((v, i) => {
    ranks[v] = i.toString();
  });
  if (nums.length > 0) ranks[index[0]] = 'Gold Medal';
  if (nums.length > 1) ranks[index[1]] = 'Silver Medal';
  if (nums.length > 2) ranks[index[2]] = 'Bronze Medal';
  return ranks;
};
findRelativeRanks([5, 4, 3, 2, 1]);
