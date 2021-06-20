/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let hashMap = {};
  for(let c of J){
    if(!hashMap[c]) {
      hashMap[c] = true;
    }
  }
  let count = 0;
  for(let c of S){
    if(hashMap[c]) {
      count++;
    }
  }
  return count;
};