/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.maxSize = maxSize;
  this.stack = [];
  this.inc = new Array(maxSize).fill(0);
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.maxSize) {
    this.stack.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  const i = this.stack.length - 1;
  if (i < 0) {
    return -1;
  }
  if (i > 0) {
    this.inc[i - 1] += this.inc[i];
  }
  const e = this.stack.pop() + this.inc[i];
  this.inc[i] = 0;
  return e;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  const i = Math.min(k, this.stack.length) - 1;
  if (i >= 0) this.inc[i] += val;
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
const stack = new CustomStack(2);
stack.push(1);
stack.push(2);
stack.pop();
