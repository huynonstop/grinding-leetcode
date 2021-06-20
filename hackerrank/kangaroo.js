function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if (x1 === x2 && v1 === v2) return 'YES';
  if (v1 === v2) return 'NO';
  if((x1 - x2) * (v1 - v2) > 0) return 'NO';
  return (x1 - x2) % (v2 - v1) ? 'NO' : 'YES';
}
kangaroo(43,2,70,2)