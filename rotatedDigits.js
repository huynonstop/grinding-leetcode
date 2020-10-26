/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
	// Brute Force O(N logN)
	let c = 0;
	let check = (n) => {
		let flag = false;
		while (n !== 0) {
			let digit = n % 10;
			if ([3, 4, 7].includes(digit)) return false;
			if ([2, 5, 6, 9].includes(digit)) flag = true;
			n = Math.floor(n / 10);
		}
		return flag;
	};
	for (let i = 1; i <= N; i++) {
		if (check(i)) {
			c++;
		}
	}
	return c;
};

var rotatedDigits = function (N) {
	// O(N) O(N)
	let hashmap = new Map([
		[0, false],
		[1, false],
		[2, true],
		[5, true],
		[6, true],
		[8, false],
		[9, true],
	]);

	let c = 0;
	let check = (n) => {
		if (hashmap.has(n)) return hashmap.get(n);
		if (hashmap.has(n % 10) && hashmap.has(Math.floor(n / 10))) {
			let flag =
				hashmap.get(n % 10) || hashmap.get(Math.floor(n / 10));
			hashmap.set(n, flag);
			return flag;
		}
		return false;
	};
	for (let i = 1; i <= N; i++) {
		if (check(i)) {
			c++;
		}
	}
	return c;
};

var rotatedDigits = function (N) {
	// O(N) O(N)
	let hashmap = new Map([
		[0, false],
		[1, false],
		[2, true],
		[5, true],
		[6, true],
		[8, false],
		[9, true],
	]);

	let c = 0;
	for (let i = 1; i <= N; i++) {
		if (
			hashmap.get(Math.floor(i / 10)) === false &&
			hashmap.get(i % 10) === false
		)
			hashmap.set(i, false);
		else if (hashmap.has(Math.floor(i / 10)) && hashmap.has(i % 10)) {
			hashmap.set(i, true);
			c++;
		}
	}
	return c;
};

rotatedDigits(10);
