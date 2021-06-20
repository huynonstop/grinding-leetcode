
var RecentCounter = function() {
  this.list = [];
  this.left = 0;
  this.right = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.list.push(t);
  this.right++;
  while(this.list[this.left] < t - 3000) {
    this.left++;
  }
  return this.right - this.left;
};
