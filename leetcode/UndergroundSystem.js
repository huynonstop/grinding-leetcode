class UndergroundSystem {
  constructor() {
    this.start = {};
    this.startPlace = {};
    this.end = {};
  }

  checkIn(id, stationName, t) {
    this.start[id] = t;
    this.startPlace[id] = stationName;
    if (!this.end[stationName]) this.end[stationName] = {};
  }

  checkOut(id, stationName, t) {
    const startStation = this.startPlace[id];
    const startTime = this.start[id];
    if (!this.end[startStation][stationName])
      this.end[startStation][stationName] = { total: 0, count: 0 };
    this.end[startStation][stationName].total += t - startTime;
    this.end[startStation][stationName].count++;
  }

  getAverageTime(startStation, endStation) {
    const { total, count } = this.end[startStation][endStation];
    return total / count;
  }
}
