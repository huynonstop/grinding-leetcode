/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let b = [];
  let st = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') st.push(i);
    else if (s[i] === ')') {
      if (st.length) {
        b[i] = [true];
        b[st.pop()] = true;
      }
    } else {
      b[i] = true;
    }
  }
  let rs = '';
  for (let i = 0; i < s.length; i++) {
    if (b[i]) rs += s[i];
  }
  return rs;
};

var minRemoveToMakeValid = function (s) {
  let sl = s.split('');
  let st = [];
  for (let i = 0; i < s.length; i++) {
    if (sl[i] === '(') st.push(i);
    else if (sl[i] === ')') {
      if (st.length) {
        st.pop();
      } else {
        sl[i] = '';
      }
    }
  }
  while (st.length) {
    sl[st.pop()] = '';
  }
  return sl.join('');
};
