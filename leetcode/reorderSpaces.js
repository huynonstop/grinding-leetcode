/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  const trimmedText = text.trim();
  let countWhite = 0;
  let countSpace = 0;
  for (let i = 0; i < trimmedText.length; i++) {
    if (trimmedText[i] === ' ') {
      countWhite++;
      if (trimmedText[i - 1] !== ' ') countSpace++;
    }
  }
  const wordLength = trimmedText.length - countWhite;
  const whiteLength = text.length - wordLength;
  const equalLength = Math.floor(whiteLength / countSpace);
  let endLength = whiteLength % countSpace
  if (isNaN(endLength)) {
    endLength = whiteLength
  }
  let rs = '';
  for (let i = 0; i < trimmedText.length; i++) {
    if (trimmedText[i] !== ' ') {
      rs += trimmedText[i];
    } else if (trimmedText[i - 1] !== ' ') {
      rs += ' '.repeat(equalLength);
    }
  }
  rs += ' '.repeat(endLength);
  return rs;
};
reorderSpaces("  hello");
