/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let seen = Array(rooms.length);
  let stack = [0];
  while (stack.length) {
    let cur = stack.pop();
    if (!seen[cur]) {
      seen[cur] = 1;
      for (let k of rooms[cur]) {
        if (!seen[k]) stack.push(k);
      }
    }
  }
  for (let r of seen) {
    if (!r) return false;
  }
  return true;
};
var canVisitAllRooms = function (rooms) {
  let stack = [0];
  let seen = new Set(stack);

  while (stack.length) {
    let cur = stack.pop();
    for (let k of rooms[cur]) {
      if (!seen.has(k)) {
        stack.push(k);
        seen.add(k);
        if (seen.size === rooms.length) return true;
      }
    }
  }
  return seen.size === rooms.length;
};
canVisitAllRooms([[1], [2], [3], []]);
canVisitAllRooms([[4], [3], [], [2, 5, 7], [1], [], [8, 9], [], [], [6]]);
