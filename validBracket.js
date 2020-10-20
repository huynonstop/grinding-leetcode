/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const bracket_map = { ['(']: ')', ['{']: '}', ['[']: ']' };
	const stack = [];
	for (let c of s) {
		if (bracket_map[c]) {
			stack.push(c);
		} else if (c === bracket_map[stack[stack.length - 1]]) {
			stack.pop();
		} else {
			return false;
		}
	}
	return stack.length === 0;
};

isValid('()');
