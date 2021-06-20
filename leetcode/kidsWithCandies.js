/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 */
var kidsWithCandies = function (candies, extraCandies) {
  let maxCandies = Math.max(...candies);
  return candies.map((v) => {
    return v + extraCandies >= maxCandies;
  });
};

kidsWithCandies(
  [2,3,5,1,3],3)
