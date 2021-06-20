/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  // return function(n) {
  //     for(let i = 1;i <= n;i++) {
  //         if(isBadVersion(i)) return i
  //     }
  // };
  return function (n) {
    let left = 1;
    let right = n;
    if (isBadVersion(1)) return 1;
    if (!isBadVersion(n - 1)) return n;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let isBad = isBadVersion(mid);
      if (isBad && !isBadVersion(mid - 1)) return mid;
      if (isBad) right = mid - 1;
      else left = mid + 1;
    }
    return left;
  };
  // return function(n) {
  //   let left = 1;
  //   let right = n;
  //   while (left < right) {
  //       let mid = Math.floor((left+right)/2);
  //       if (isBadVersion(mid)) {
  //           right = mid;
  //       } else {
  //           left = mid + 1;
  //       }
  //   }
  //   return left;
  // }
};
