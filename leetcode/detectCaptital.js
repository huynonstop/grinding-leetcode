/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word === word.toLowerCase()) return true;
  if (word === word.toUpperCase()) return true;
  if(word[0] !== word[0].toUpperCase()) return false;
  for (let i = 1; i < word.length; i++) {
    if(word[i] !== word[i].toLowerCase) return false;
  }
  return true;
};


var detectCapitalUse = function(word) {
  if(word.length === 1) return true;
  let flag = word[0].toUpperCase() === word[0] && word[1].toUpperCase() === word[1];
  if(flag) {
    for(let i = 2;i<word.length;i++) {
      if(word[i].toLowerCase() === word[i]) return false;
    }
  } else {
    for(let i = 1;i<word.length;i++) {
      if(word[i].toUpperCase() === word[i]) return false;
    }
  }
  return true;
}