/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
	let lo = 0;
	let hi = S.length;
	let ans = [];
	for (let i = 0; i < S.length; i++) {
		if (S[i] === 'I') {
			ans[i] = lo++;
		} else {
      ans[i] = hi--;
    }
  }
  ans[S.length] = lo;
  return ans;
};
