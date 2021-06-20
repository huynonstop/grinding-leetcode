/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let oldColor = image[sr][sc];
  if(oldColor === newColor) return image
  let _helper = (r, c) => {
    if (image[r] === undefined || image[r][c] !== oldColor) return;
    image[r][c] = newColor;
    _helper(r + 1, c);
    _helper(r - 1, c);
    _helper(r, c + 1);
    _helper(r, c - 1);
  };
  _helper(sr, sc);
  return image;
};

floodFill(
  [
    [0, 0, 0],
    [0, 1, 1],
  ],
  1,
  1,
  1
);
