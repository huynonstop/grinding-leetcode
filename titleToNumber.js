/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
	const na = 'A'.charCodeAt(0);
	let exp = 1;
	let rs = 0;
	for (let i = 1; i <= s.length; i++) {
		const value = s[s.length - i].charCodeAt(0) - na + 1;
		rs += exp * value;
		exp = exp * 26;
	}
	return rs;
};

titleToNumber('ZY');

var titleToNumber = function (s) {
	const na = 'A'.charCodeAt(0);
	let rs = Array.from(s).reduce((p, _, i) => {
		const value = s.charCodeAt(i) - na + 1;
		return p * 26 + value;
	}, 0);
	return rs;
};
