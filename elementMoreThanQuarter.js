/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
	let n = arr.length;
	const firstOccurrence = (target) => {
		let lo = 0;
		let hi = n - 1;
		while (lo < hi) {
			let mid = Math.floor((lo + hi) / 2);
			if (target > arr[mid]) lo = mid + 1;
			else hi = mid;
		}
		return lo;
	};
	let firstQ = Math.floor(n / 4);
	let secondQ = Math.floor(n / 2);
	let thirdQ = Math.floor((3 * n) / 4);
	for (let num of [arr[firstQ], arr[secondQ], arr[thirdQ]]) {
		let idx = firstOccurrence(num);
		if (arr[idx + firstQ] === num) return num;
	}
	return -1;
};

findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]);

var findSpecialInteger = function (arr) {
	let n = arr.length;
	const firstOccurrence = (idx) => {
		while (arr[idx] === arr[idx - 1]) {
			idx--;
		}
		return idx;
	};
	let firstQ = Math.floor(n / 4);
	let secondQ = Math.floor(n / 2);
	let thirdQ = Math.floor((3 * n) / 4);
	for (let idx of [firstQ, secondQ, thirdQ]) {
		let f_idx = firstOccurrence(idx);
		if (arr[f_idx + firstQ] === arr[f_idx]) return arr[f_idx];
	}
	return -1;
};

var findSpecialInteger = function (arr) {
	let count = 0;
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[j]) {
			if (count > arr.length / 4) {
				return arr[j];
			} else {
				count = 1;
				j = i;
			}
		} else {
			count++;
		}
	}
	return arr[j];
};

var findSpecialInteger = function (arr) {
	let t = Math.floor(arr.length / 4);
	for (let i = 0; i < arr.length - t; i++) {
		if (arr[i] == arr[i + t]) {
			return arr[i];
		}
	}
	return -1;
};
