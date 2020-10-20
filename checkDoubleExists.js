/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  let hashmap = {};
  for(let i =0;i< arr.length;i++) {
      let num = arr[i]
      if(hashmap[num]) return true
      if(num%2===0) {
        hashmap[num/2] = true
      }
      hashmap[num*2] = true
  }
  return false
};
checkIfExist(
[-16,-13,8])