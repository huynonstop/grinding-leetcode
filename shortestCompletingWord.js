/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
	let plateMap = new Map();
	for (let c of licensePlate.toLowerCase()) {
		if (isLetter(c))
			plateMap.set(c, plateMap.has(c) ? plateMap.get(c) + 1 : 1);
	}
	let minLength = 16;
	let rs = null;
	let matched = (word) => {
		let wordMap = new Map();
		for (let c of word.toLowerCase()) {
			if (isLetter(c))
				wordMap.set(c, wordMap.has(c) ? wordMap.get(c) + 1 : 1);
		}
		for (let [k, v] of plateMap) {
			if (!wordMap.has(k) || v > wordMap.get(k)) return false;
		}
		return true;
	};
	for (let word of words) {
		if (word.length < minLength && matched(word)) {
			minLength = word.length;
			rs = word;
		}
	}
	return rs;
};

function isLetter(c) {
	return c.toLowerCase() !== c.toUpperCase();
}

var shortestCompletingWord = function (licensePlate, words) {
	let primes = [
		2,
		3,
		5,
		7,
		11,
		13,
		17,
		19,
		23,
		29,
		31,
		37,
		41,
		43,
		47,
		53,
		59,
		61,
		67,
		71,
		73,
		79,
		83,
		89,
		97,
		101,
		103,
	];
	let getCharProduct = (word) => {
		let product = 1;
		for (let c of word) {
			let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
			if (0 <= i && i <= 25) {
				product *= primes[i];
			}
		}
		return product;
	};
	let plateProduct = getCharProduct(licensePlate.toLowerCase());
	let min = { length: 16 };
	for (let word of words) {
		if (
			word.length < min.length &&
			getCharProduct(word) % plateProduct === 0
		) {
			min = word;
		}
	}
	return min;
};

shortestCompletingWord('1s3 PSt', [
	'step',
	'steps',
	'stripe',
	'stepple',
]);
