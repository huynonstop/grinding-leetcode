/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if(A.length !== B.length) return false;
  if(A === B && A.length >  new Set([...A]).size) return true;
  let dif = [];
  for(let i=0;i<A.length;i++) {
    if(A[i] !== B[i]) dif.push(i);
  }
  return dif.length === 2 && A[dif[0]] === B[dif[1]] && A[dif[1]] === B[dif[0]]
};