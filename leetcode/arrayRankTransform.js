/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
	let sortArr = arr
		.map((v, i) => ({ v, i }))
		.sort((a, b) => a.v - b.v);
	let rank = 1;
	sortArr.forEach((v, i) => {
		arr[v.i] = rank;
		if (sortArr[i + 1] && v.v < sortArr[i + 1].v) {
			rank++;
		}
	});
	return arr;
};

var arrayRankTransform = function (arr) {
	let sortArr = Array.from(arr).sort((a, b) => a - b);
	let map = new Map();
	let rank = 1;
	sortArr.forEach((v) => {
		if (!map.has(v)) map.set(v, rank++);
	});
	return arr.map((v) => map.get(v));
};

arrayRankTransform([40, 10, 20, 30]);
