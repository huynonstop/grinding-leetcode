/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function (memory1, memory2, time = 1) {
  if (memory1 < time && memory2 < time) {
    return [time, memory1, memory2];
  }
  if (memory1 < memory2) {
    return memLeak(memory1, memory2 - time, time + 1);
  }
  return memLeak(memory1 - time, memory2, time + 1);
};

var memLeak = function (memory1, memory2) {
  let time = 1;
  while (memory1 >= time || memory2 >= time) {
    if (memory1 < memory2) {
      memory2 -= time;
    } else {
      memory1 -= time;
    }
    time++;
  }
  return [time, memory1, memory2]
};