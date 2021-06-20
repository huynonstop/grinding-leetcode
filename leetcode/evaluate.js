/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  let dict = {};
  for (let [key, value] of knowledge) {
    dict[key] = value;
  }
  let parts = s.split('(');
  let rs = parts[0];
  for (let i = 1; i < parts.length; i++) {
    const [key, postFix = ''] = parts[i].split(')');
    rs += (dict[key] || '?') + postFix;
  }
  return rs;
};

var evaluate = function (s, knowledge) {
  let dict = {};
  for (let [key, value] of knowledge) {
    dict[key] = value;
  }
  let rs = '';
  let key = '';
  let isKey = false;
  for (let c of s) {
    if (c === '(') {
      isKey = true;
    } else if (c === ')') {
      isKey = false;
      rs += dict[key] || '?';
      key = '';
    } else if (isKey) {
      key += c;
    } else {
      rs += c;
    }
  }
  return rs;
};
evaluate('(name)is(age)yearsold', [
  ['name', 'bob'],
  ['age', 'two'],
]);
