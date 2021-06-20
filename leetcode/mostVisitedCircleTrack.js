/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
	let array = Array(n).fill(0);
	let max = 0;
	for (let i = 1; i < rounds.length; i++) {
		let track = rounds[i - 1] - 1;
		let cur = rounds[i] - 1;
		while (track % n !== cur) {
			max = Math.max(++array[track], max);
			track = ++track % n;
		}
	}
	max = Math.max(++array[rounds[rounds.length - 1] - 1], max);
	return array
		.map((v, i) => i + 1)
		.filter((v) => array[v - 1] === max);
};

var mostVisited = function (n, rounds) {
	let rs = [];
	for (let i = rounds[0]; i <= rounds[rounds.length - 1]; i++) {
		rs.push(i);
	}
	if (rs.length) return rs;
	for (let i = 1; i <= rounds[rounds.length - 1]; i++) {
		rs.push(i);
	}
	for (let i = rounds[0]; i <= n; i++) {
		rs.push(i);
	}
	return rs;
};

mostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
