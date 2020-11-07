/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let prevTime = 0;
  let maxDuration = 0;
  let maxKey = null;
  releaseTimes.forEach((v, i) => {
    const duration = v - prevTime;
    prevTime = v;
    if (duration > maxDuration) {
      maxDuration = duration;
      maxKey = keysPressed[i];
    } else if (duration === maxDuration) {
      if (keysPressed[i] > maxKey) {
        maxKey = keysPressed[i];
      }
    }
  });
  return maxKey;
};
slowestKey([9, 29, 49, 50], 'cbcd');
