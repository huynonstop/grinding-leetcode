/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const buckets = groupSizes.map(() => []);
  const res = [];
  for (let i = 0; i < groupSizes.length; i++) {
    let bucket = buckets[groupSizes[i] - 1];
    bucket.push(i);
    if (bucket.length === groupSizes[i]) {
      res.push(bucket);
      buckets[groupSizes[i] - 1] = [];
    }
  }
  return res;
};

groupThePeople([3, 3, 3, 3, 3, 1, 3]);
