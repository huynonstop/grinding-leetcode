/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	while (num < 10) {
		num = sumDigit(num);
	}
	return num;
};

function sumDigit(num) {
	let rs = 0;
	while (num !== 0) {
		rs += num % 10;
		num = Math.floor(num / 10);
	}
	return rs;
}

var addDigits = function (num) {
	let digitalRoot = 0;
	while (num !== 0) {
		digitalRoot += num % 10;
		num = Math.floor(num / 10);
		if (num === 0 && digitalRoot > 9) {
			num = digitalRoot;
			digitalRoot = 0;
		}
	}
	return digitalRoot;
};

var addDigits = function (num) {
	// n=d0+d1⋅10^1+d2⋅10^2+...+dk⋅10^k
	// n=d0+d1⋅(9+1)+d2⋅(9*11+1)+...+dk⋅(9*1...1(k) + 1)
	// n=(d0+d1+d2+...+dk) + 9⋅(1+11+...+1...1(k))
	// n%9=(d0+d1+d2+...+dk)%9
	// =>
	// if (num == 0) return 0;
	// if (num % 9 == 0) return 9;
	// return num % 9;
	return num == 0 ? 0 : 1 + ((num - 1) % 9);
};
