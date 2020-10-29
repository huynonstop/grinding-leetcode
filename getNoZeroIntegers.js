/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
	for (let i = 1; i < n; i++) {
		if (checkNoZero(i) && checkNoZero(n - i)) return [i, n - i];
	}
	return [-1, -1];
};

function checkNoZero(n) {
	if (n % 10 === 0) return false;
	if (n < 10) return true;
	return checkNoZero(Math.floor(n / 10));
}

var getNoZeroIntegers = function (n) {
	let a = 0,
		b = 0,
		step = 1;
	while (n > 0) {
		let d = n % 10;
		n = Math.floor(n / 10);
		if ((d === 0) || (d === 1 && n > 0)) {
			a += step * (1 + d);
			b += step * 9;
			n--;
		} else {
			a += step;
			b += step * (d - 1);
    }
    step *= 10;
	}
	return [a, b];
};

console.log(getNoZeroIntegers(1010));
