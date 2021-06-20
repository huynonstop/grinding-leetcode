/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 * https://leetcode.com/problems/check-array-formation-through-concatenation/
 */
var canFormArray = function(arr, pieces) {
  let hashmap = new Map();
  pieces.forEach(arr => {
    hashmap.set(arr[0], arr);
  })
  for(let i = 0;i < arr.length;i++) {
    if(!hashmap.has(arr[i])) return false;
    const piece = hashmap.get(arr[i])
    for(let j = 0; j < piece.length; j++) {
      if(arr[i++] !== piece[j]) return false;
    }
    i--;
  }
  return true;
};

canFormArray([85],[[85]]);