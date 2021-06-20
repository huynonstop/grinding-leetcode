/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  let binaryN = toBin(n);
  let pre = -1;
  let f_i = 0;
  let rs = 0;
  while(binaryN[f_i] !== '1' && f_i < binaryN.length) {
    f_i++;
  }
  if(f_i === binaryN.length) return rs;
  pre = f_i;
  for(let i = pre + 1;i < binaryN.length;i++) {
    if(binaryN[i] === '1') {
      rs = Math.max(rs, i - pre);
      pre = i;
    }
  }
  return rs;
};

function toBin(n) {
  return n.toString(2);
}

binaryGap(5);