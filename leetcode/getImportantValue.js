/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
	let hashMap = new Map();
	for (let { id, importance, subordinates } of employees) {
		hashMap.set(id, [importance, subordinates]);
	}
	let [importance, subs] = hashMap.get(id);
	while (subs.length) {
		let sub_id = subs.pop();
		let [sub_importance, sub_subs] = hashMap.get(sub_id);
		importance += sub_importance;
		sub_subs.forEach((v) => {
			subs.push(v);
		});
	}
	return importance;
};

var GetImportance = function (employees, id) {
	let hashMap = new Map();
	for (let { id, importance, subordinates } of employees) {
		hashMap.set(id, [importance, subordinates]);
	}
	let dfs = (id) => {
		let [importance, subs] = hashMap.get(id);
		for (s_id of subs) {
			importance += dfs(s_id);
		}
		return importance;
	};
	return dfs(id);
};

GetImportance(
	[
		{
			id: 1,
			importance: 5,
			subordinates: [2, 3],
		},
		{
			id: 2,
			importance: 3,
			subordinates: [4],
		},
		{
			id: 3,
			importance: 4,
			subordinates: [],
		},
		{
			id: 4,
			importance: 1,
			subordinates: [],
		},
	],
	1
);
