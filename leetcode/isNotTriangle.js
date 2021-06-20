/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const [pointA, pointB, pointC] = points;
  const [xA, yA] = pointA;
  const [xB, yB] = pointB;
  const [xC, yC] = pointC;
  return (
    (xB - xA) * (yC - yA) !== (xC - xA) * (yB - yA) &&
    notEqual(pointA, pointB) &&
    notEqual(pointB, pointC) &&
    notEqual(pointA, pointC)
  );
};

function notEqual(pointA, pointB) {
  const [xA, yA] = pointA;
  const [xB, yB] = pointB;
  return xA !== xB || yA !== yB;
}
