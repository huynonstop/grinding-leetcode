/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  let stack = [];
  for (let c of s) {
    if (c !== ')') {
      stack.push(c);
    } else {
      let t = [];
      while (stack[stack.length - 1] !== '(') {
        let s = stack.pop();
        t.push(s);
      }
      stack.pop();
      stack.push(...t);
    }
  }
  return stack.join('');
};

var reverseParentheses = function (s) {
  //  0123456789ABCD
  // '(ed(et(oc))el)'
  let stack = [];
  let pair = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    }
    if (s[i] === ')') {
      let j = stack.pop();
      pair[i] = j;
      pair[j] = i;
    }
  }
  /*
    {
      0:D 
      3:A
      3:9
    }
  */
  let rs = '';
  let i = 0,
    d = 1;

  while (i < s.length) {
    if (s[i] === '(' || s[i] === ')') {
      i = pair[i];
      d = -d;
    } else {
      rs += s[i];
    }
    i += d;
  }
  return rs;
};

var reverseParentheses = function (s) {
  let stack = [''];
  for (let c of s) {
    if (c === '(') {
      stack.push('');
    } else if (c === ')') {
      let t = stack.pop().split('').reverse().join('');
      stack[stack.length - 1] += t;
    } else {
      stack[stack.length - 1] += c;
    }
  }
  return stack.pop();
};

reverseParentheses('(abcd)');
