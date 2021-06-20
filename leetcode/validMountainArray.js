/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if(A.length < 3) return false;
  let left = 0;
  let right = A.length - 1;
  while(left < right) {
    if(A[Left] <= A[left+1]) return true;
    if(A[right-1] > A[right]) return true;
    
  }
};