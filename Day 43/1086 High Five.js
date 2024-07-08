// 1086 Hig Five

const assert = require("assert");

// Given a list of scores for different students, return the average of each student's top five scores in a sorted order by student ID. Each entry in the input list is of the form [student_id, score].

const highFive = (scores) => {
  let frequencyMap = {};
  for (let [id, score] of scores) {
    if (!frequencyMap[id]) {
      frequencyMap[id] = [];
    }
    frequencyMap[id].push(score);
  }

  //get the top five scores
  let resultArray = [];
  for (let id in frequencyMap) {
    let scores = frequencyMap[id];

    // sort in desc order
    scores.sort((a, b) => b - a);
    let marks = 0;
    for (let i = 0; i < 5; i++) {
      marks += scores[i];
    }
    resultArray.push([parseInt(id), Math.floor(marks / 5)]);
  }
  return resultArray;
};

// Example usage
const items = [
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
];
console.log(highFive(items));
// Output: [[1, 87], [2, 88]]
assert.deepEqual(highFive(items), [
  [1, 87],
  [2, 88],
]);
