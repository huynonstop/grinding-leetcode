/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if(x >=  2 ** 31 -1 || x <= (-2) ** 31) {
    return 0;
  }
	let rs = 0;
	let flag = 1;
	if (x < 0) {
		flag = -1;
	}
	x = x * flag;
	while (Math.abs(x) > 0) {
		rs = rs * 10 + (x % 10);
		x = Math.floor(x / 10);
	}
	return rs * flag;
};

reverse(123);
