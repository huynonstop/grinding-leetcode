/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  let mapSeen = new Map([['0,0',true]])
  let curX = 0, curY = 0;
  for(let move of path) {
    if(move === 'N') {
      curY++;
    } else if(move === 'S') {
      curY--;
    } else if(move === 'E') {
      curX++;
    } else if(move === 'W') {
      curX--;
    }
    let newCord = `${curX},${curY}`
    if(mapSeen.has(newCord)) return true;
    mapSeen.set(newCord,true)
  }
  return false;
};