function gradingStudents(grades) {
  // Write your code here
  return grades.map((g) => {
    if (g < 38) return g;
    if (g % 5 > 2) return g - (g % 5) + 5;
    return g;
  });
}

console.log(gradingStudents([73, 67, 38, 33]));
