/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.min = 10000;
    this.max = -10000;
    this.nums = Array(20001).fill(0);
    nums.forEach((v) => {
      this.min = Math.min(v, this.min);
      this.max = Math.max(v, this.max);
      this.nums[v + 10000] += 1;
    });
  }
  add(val) {
    this.min = Math.min(val, this.min);
    this.max = Math.max(val, this.max);
    this.nums[val + 10000] += 1;
    let k = this.k;
    let i = this.max + 10000;
    while (k > 0) {
      if (this.nums[i]) {
        k -= this.nums[i];
      }
      i--;
    }
    return i - 10000 + 1;
  }
}
let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8

// https://leetcode.com/problems/kth-largest-element-in-a-stream/discuss/504552/JavaScript-Min-Heap-solution