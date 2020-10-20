function plusOne(digits) {
	for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10;
    if(digits[i]) return digits;
  }
  digits[0]++;
  digits.push(0);
  return digits;
}
plusOne([9])