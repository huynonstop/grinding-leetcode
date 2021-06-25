function bonAppetit(bill, k, b) {
  // Write your code here
  let s = bill.reduce((p, c) => p + c);
  const cost = (s - bill[k]) >> 1;
  console.log(cost === b ? 'Bon Appetit' : b - cost);
}
