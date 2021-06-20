/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	let rs = [];
	let temp = [];
	const backtrack = (remain, start) => {
		if (remain < 0) return;
		else if (remain === 0) {
			rs.push([...temp]);
		} else {
			for (let i = start; i < candidates.length; i++) {
				temp.push(candidates[i]);
				backtrack(remain - candidates[i], i);
				temp.pop();
			}
		}
	};
	backtrack(target, 0);
	return rs;
};
