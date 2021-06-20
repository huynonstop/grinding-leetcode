/**
 * @param {string} characters
 * @param {number} combinationLength
 * https://leetcode.com/problems/iterator-for-combination/discuss/451544/Java-No-pre-calculation-needed-for-iterator-questions
 * https://leetcode.com/problems/iterator-for-combination/discuss/790113/Python-O(k)-on-the-fly-explained
 * https://leetcode.com/problems/iterator-for-combination/discuss/789164/C%2B%2B-Using-Bit-manipulation-or-Detail-Explain
 */

var CombinationIterator = function (characters, combinationLength) {
  this.cur = 0;
  this.array = [];
  const dfs = (prefix = '', index = -1) => {
    if (prefix.length === combinationLength) {
      this.array.push(prefix);
      return;
    }
    for (let i = index + 1; i < characters.length; i++) {
      dfs(prefix + characters[i], i);
    }
  };
  dfs();
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  return this.array[this.cur++];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.cur <= this.array.length - 1;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const nCr = (n, r) => {
  let n_f = 1;
  let r_f = 1;
  let n_r_f = 1;
  for (let i = 2; i <= n; i++) {
    n_f *= i;
    if (i === r) r_f = n_f;
    if (i === n - r) n_r_f = n_f;
  }
  return n_f / (r_f * n_r_f);
};


const it = new CombinationIterator('abc', 2);
console.log(it.next());
console.log(it.hasNext());
console.log(it.next());
console.log(it.hasNext());
console.log(it.next());
console.log(it.hasNext());
