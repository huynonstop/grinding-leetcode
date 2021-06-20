/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
	let rs = '';
	if (n < 1000) return '' + n;
	let count = 0;
	while (n !== 0) {
		if (count === 3) {
			rs = '.' + rs;
			count = 0;
		}
		rs = (n % 10) + rs;
		n = Math.floor(n / 10);
		count++;
	}
	return rs;
};

var thousandSeparator = function (n) {
	let rs = '';
	let str_n = n.toString();
	if (n < 1000) return str_n;
	for (let i = 0; i < str_n.length; i++) {
		if (i > 0 && (str_n.length - i) % 3 === 0) {
			rs += '.';
		}
		rs += str_n[i];
	}
	return rs;
};

thousandSeparator(1234);
