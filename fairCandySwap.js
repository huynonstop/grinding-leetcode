/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
	let i_A = 0;
	let i_B = 0;
	let sum_A = 0;
	let sum_B = 0;
	A.sort((a, b) => a - b);
	B.sort((a, b) => a - b);
	for (let a of A) {
		sum_A += a;
	}
	for (let b of B) {
		sum_B += b;
	}
	while (sum_A !== sum_B) {
		let new_sum_A = sum_A + B[i_B] - A[i_A];
		let new_sum_B = sum_B - B[i_B] + A[i_A];
		if (new_sum_A > new_sum_B) {
			i_A++;
		} else if (new_sum_A < new_sum_B) {
			i_B++;
		} else {
			return [A[i_A], B[i_B]];
		}
	}
};

var fairCandySwap = function (A, B) {
	let sum_A = 0;
	let sum_B = 0;
	const hashMapB = new Map();
	for (let a of A) {
		sum_A += a;
	}
	for (let b of B) {
		sum_B += b;
		hashMapB.set(b, true);
	}
	const delta = (sum_B - sum_A) / 2;
	for (let a of A) {
		if (hashMapB.get(a + delta)) return [a, a + delta];
	}
};

fairCandySwap([35, 17, 4, 24, 10], [63, 21]);
