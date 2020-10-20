/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
	let s_a = S.split(' ');
	for (let i = 0; i < s_a.length; i++) {
		s_a[i] = translate(s_a[i], i + 1);
	}
	return s_a.join(' ');
};

function translate(s, n_a) {
  let new_s = '';
  let postfix = '';
	if (['a', 'e', 'i', 'o', 'u'].includes(s[0].toLowerCase())) {
		new_s = s;
	} else {
    new_s = s.slice(1);
    postfix += s[0];
  }
  postfix += "ma" + "a".repeat(n_a);
  return new_s + postfix;
}
