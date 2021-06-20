// https://leetcode.com/problems/design-browser-history/discuss/674300/Two-Stacks-vs.-List
class BrowserHistory {
  constructor(homepage) {
    this.stack = [homepage];
    this.max = 0;
    this.current = 0;
  }

  visit(url) {
    this.stack[++this.current] = url;
    this.max = this.current;
  }

  back(steps) {
    this.current = Math.max(0, this.current - steps);
    return this.stack[this.current];
  }

  forward(steps) {
    this.current = Math.min(this.max, this.current + steps);
    return this.stack[this.current];
  }
}
