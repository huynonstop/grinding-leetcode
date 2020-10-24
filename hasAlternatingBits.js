/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
	let pre = -1;
	while (n !== 0) {
		let now = n % 2;
		if (pre === now) {
			return false;
		} 
        pre = now;	
        n = Math.floor(n / 2);
  }
  return true;
};

var hasAlternatingBits = function (n) {
  let binS = n.toString(2)
  for(let i = 0;i < binS.length - 1; i++) {
    if(binS[i]===binS[i+1]) return false;
  }
  return true;
};
