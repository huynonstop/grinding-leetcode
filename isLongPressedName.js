/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let i_n = 0;
  let i_t = 0;
  while (i_n < name.length && i_t < typed.length) {
    if (name[i_n] === typed[i_t]) {
      i_n++;
      i_t++;
    } else if (i_t >= 1 && typed[i_t] === typed[i_t - 1]) {
      i_t++;
    } else {
      return false;
    }
  }
  if (i_n !== name.length) return false;
  while (i_t < typed.length) {
    if (typed[i_t] !== typed[i_t - 1]) return false;
    i_t++;
  }
  return true;
};

isLongPressedName('vtkgn', 'vttkgnn');
