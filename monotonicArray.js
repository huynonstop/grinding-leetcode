/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
	if (A.length < 2) return true;
	let i = 0;
	let mode;
	while (i < A.length - 1) {
		if (A[i] - A[i + 1] !== 0) {
			mode = A[i] - A[i + 1];
			break;
		} else {
			i++;
		}
	}
	if (i === A.length - 1) return true;
	for (let j = i + 1; j < A.length - 1; j++) {
		if (mode > 0) {
			if (A[j] - A[j + 1] < 0) return false;
		} else {
			if (A[j] - A[j + 1] > 0) return false;
		}
	}
	return true;
};

var isMonotonic = function (A) {
	if (A.length < 2) return true;
	let i = 0;
	let mode = A[i] - A[++i];
	while (i < A.length - 1) {
		let newMode = A[i] - A[++i];
		if (newMode !== 0) {
			if (mode === 0) {
				mode = newMode;
			} else if (mode * newMode < 0) {
				return false;
			}
		}
	}
	return true;
};

var isMonotonic = function (A) {
	let isMonotonicDown = true;
	let isMonotonicUp = true;
	for (let i = 0; i < A.length - 1; i++) {
		if (A[i + 1] > A[i]) isMonotonicDown = false;
		if (A[i + 1] < A[i]) isMonotonicUp = false;
		if (!(isMonotonicDown || isMonotonicUp)) return false;
	}
	return true;
};

let rs = isMonotonic([1, 2, 2, 3]);
console.log(rs);
