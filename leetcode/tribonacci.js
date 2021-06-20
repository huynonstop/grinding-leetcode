/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
	let temp = [0, 1, 1];
	for (let i = 3; i <= n; i++) {
		temp[i] = temp[i - 1] + temp[i - 2] + temp[i - 3];
	}
	return temp[n];
};

var tribonacci = function (n) {
	let temp = [0, 1, 1];
	if (n < 3) return temp[n];
	for (let i = 3; i < n; i++) {
		let t = temp[0] + temp[1] + temp[2];
		temp[0] = temp[1];
		temp[1] = temp[2];
		temp[2] = t;
	}
	return temp[0] + temp[1] + temp[2];
};

var tribonacci = function (n) {
	let temp = [0, 1, 1];
	for (let i = 3; i <= n; i++) {
		temp[i % 3] = temp[0] + temp[1] + temp[2];
	}
	return temp[n % 3];
};
