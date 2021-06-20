/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  if (
    rec1[0] === rec1[2] ||
    rec1[1] == rec1[3] ||
    rec2[0] == rec2[2] ||
    rec2[1] == rec2[3]
  )
    return false;
  return !(
    (
      rec1[2] <= rec2[0] || //left
      rec1[3] <= rec2[1] || //bottom
      rec1[0] >= rec2[2] || //right
      rec1[1] >= rec2[3] //top
    ) 
  );
};

var isRectangleOverlap = function (rec1, rec2) {
  const intersect = (p_left, p_right, q_left, q_right) =>
    Math.min(p_right, q_right) > Math.max(p_left, q_left);
  return (
    intersect(rec1[0], rec1[2], rec2[0], rec2[2]) && // width > 0
    intersect(rec1[1], rec1[3], rec2[1], rec2[3]) //height > 0
  );
};
