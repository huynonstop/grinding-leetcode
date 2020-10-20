var isHappy = function (n) {
	let memo = {};
	while (true) {
		n = calcHappy(n);
		if (n === 1) return true;
		if (memo[n]) return false;
		memo[n] = n;
	}
};

function calcHappy(n) {
	let s = 0;
	while (n !== 0) {
		console.log(n);
		s += (n % 10) * (n % 10);
		console.log(s);
		n = Math.floor(n / 10);
		console.log(n);
	}
	return s;
}

console.log(calcHappy(16));
console.log(isHappy(36));
