/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	const dict = {
		3: 'Fizz',
		5: 'Buzz',
	};
	const rs = [];
	for (let i = 1; i <= n; i++) {
		let t = '';
		t += check(i, 3, dict);
		t += check(i, 5, dict);
		rs.push(t || `${i}`)
	}
	return rs;
};

function check(num, key, dict) {
	return dict[key] && num % key === 0 ? dict[key] : ``;
}
