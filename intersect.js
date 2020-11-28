/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * 
 * What if nums1's size is small compared to nums2's size? Which algorithm is better?
This one is a bit tricky. Let's say nums1 is K size. Then we should do binary search for every element in nums1. Each lookup is O(log N), and if we do K times, we have O(K log N).
If K this is small enough, O(K log N) < O(max(N, M)). Otherwise, we have to use the previous two pointers method.
 *
 * What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
This one is open-ended. But Map-Reduce I believe is a good answer.
 */
var intersect = function (nums1, nums2) { //O(M+N)
  let rs = [];
  let hashmap = nums1.reduce((p, c) => {
    p[c] = p[c] + 1 || 1;
    return p;
  }, {});
  nums2.forEach((v) => {
    if (hashmap[v]) {
      rs.push(v);
      hashmap[v]--;
    }
  });
  return rs;
};
// What if the given array is already sorted? How would you optimize your algorithm?
var intersect = function (nums1, nums2) { //O(max(M,N))
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i1 = 0,
    i2 = 0;
  let rs = [];
  while (i1 < nums1.length && i2 < nums2.length) {
    if (nums1[i1] === nums2[i2]) {
      rs.push(nums1[i1]);
      i1++;
      i2++;
    } else if (nums1[i1] > nums2[i2]) {
      i2++;
    } else {
      i1++;
    }
  }
  return rs;
};
intersect(
  [
    54,
    93,
    21,
    73,
    84,
    60,
    18,
    62,
    59,
    89,
    83,
    89,
    25,
    39,
    41,
    55,
    78,
    27,
    65,
    82,
    94,
    61,
    12,
    38,
    76,
    5,
    35,
    6,
    51,
    48,
    61,
    0,
    47,
    60,
    84,
    9,
    13,
    28,
    38,
    21,
    55,
    37,
    4,
    67,
    64,
    86,
    45,
    33,
    41,
  ],
  [
    17,
    17,
    87,
    98,
    18,
    53,
    2,
    69,
    74,
    73,
    20,
    85,
    59,
    89,
    84,
    91,
    84,
    34,
    44,
    48,
    20,
    42,
    68,
    84,
    8,
    54,
    66,
    62,
    69,
    52,
    67,
    27,
    87,
    49,
    92,
    14,
    92,
    53,
    22,
    90,
    60,
    14,
    8,
    71,
    0,
    61,
    94,
    1,
    22,
    84,
    10,
    55,
    55,
    60,
    98,
    76,
    27,
    35,
    84,
    28,
    4,
    2,
    9,
    44,
    86,
    12,
    17,
    89,
    35,
    68,
    17,
    41,
    21,
    65,
    59,
    86,
    42,
    53,
    0,
    33,
    80,
    20,
  ]
);
