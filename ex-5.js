const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  const studentScore = students.map((score) => score.score)
  const averageStudentScore = studentScore.reduce((acc, cur) => acc + cur, 0)
  return console.log(averageStudentScore / studentScore.length)
}

getAverageStudentScore(students); // Output: 87.5
