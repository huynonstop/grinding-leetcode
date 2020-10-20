/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	const n = s.length;
	if (n < 2) return s;
	let l = 0;
	let r = n - 1;
	while (l < r) {
		let t = s[r];
		s[r] = s[l];
		s[l] = t;
		l++;
		r--;
	}
	return s;
};

reverseString([...'ab']);