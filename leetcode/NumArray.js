class NumArray {
  constructor(nums) {
    this.n = nums.length;
    this.nums = nums;
    this.dp = [0];
    for (let i = 0; i < this.n; i++) {
      this.dp[i + 1] = this.nums[i] + this.dp[i];
    }
  }

  sumRange(left, right) {
    return this.dp[right + 1] - this.dp[left];
  }

  update(index, val) {
    const diff = val - this.nums[index];
    this.nums[index] = val;
    for (let i = index; i < this.n; i++) {
      this.dp[i + 1] = this.dp[i + 1] + diff;
    }
  }
}

class SegmentTree {
  constructor(nums) {
    if (nums.length) {
      this.tree = [];
      this.n = nums.length;
      this.buildTree(nums);
    }
  }
  buildTree(nums) {
    let n = this.n;
    for (let i = n, j = 0; i < 2 * n; i++, j++) {
      this.tree[i] = nums[j];
    }
    for (let i = n - 1; i > 0; i--) {
      this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
    }
  }
  update(index, val) {
    let tree = this.tree;
    let pos = index + this.n;
    this.tree[pos] = val;
    while (pos > 0) {
      let left = pos;
      let right = pos;
      if (pos % 2 === 0) {
        right = pos + 1;
      } else {
        left = pos - 1;
      }
      tree[pos >> 1] = tree[left] + tree[right];
      pos = pos >> 1;
    }
  }
  sumRange(left, right) {
    let tree = this.tree;
    let l = left + this.n;
    let r = right + this.n;
    let sum = 0;
    while (l <= r) {
      if (l % 2 === 1) {
        sum += tree[l];
        l++;
      }
      if (r % 2 === 0) {
        sum += tree[r];
        r--;
      }
      l = l >> 1;
      r = r >> 1;
    }
    return sum;
  }
}
const tree = new SegmentTree([1, 3, 5]);
tree.sumRange(0, 2);
