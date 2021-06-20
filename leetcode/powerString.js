/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
	if (s === '') return 0;
	let max_count = 1;
	let count = 1;
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === s[i + 1]) {
			count++;
			if (count > max_count) max_count = count;
		} else {
			count = 1;
		}
	}
	return max_count;
};

var maxPower = function (s) {
	let max_count = 0;
	let count = 0;
	let pre = '';
	for (let i = 0; i < s.length; i++) {
		if (s[i] === pre) {
			count++;
		} else {
			count = 1;
			pre = s[i];
		}
		max_count = Math.max(max_count, count);
	}
	return max_count;
};

maxPower('c');
