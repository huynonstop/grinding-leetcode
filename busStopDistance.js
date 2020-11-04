/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  let s1 = 0;
  let s2 = 0;
  let ts = start,
    te = destination;
  while (ts !== te) {
    s1 += distance[ts++];
    ts %= distance.length;
  }
  ts = destination;
  te = start;
  while (ts !== te) {
    s2 += distance[ts++];
    ts %= distance.length;
  }
  return Math.min(s1, s2);
};

var distanceBetweenBusStops = function (distance, start, destination) {
  let s1 = 0;
  let s2 = 0;
  for(let i = 0; i < distance.length;i++) {
    s1 += distance[i]
    if(start !== destination) {
      s2 += distance[start];
      start = (++start) %distance.length;
    }
  }
  return Math.min(s2, s1-s2);
};
distanceBetweenBusStops([1, 2, 3, 4], 0, 1);
