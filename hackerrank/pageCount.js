function pageCount(n, p) {
  // Write your code here
  return Math.min(p >> 1, (n >> 1) - (p >> 1));
}
