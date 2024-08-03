// log all pairs of array
const boxes = [1, 2, 3, 4, 5];
const result = [];
for (let i = 0; i < boxes.length; i++) {
  for (let j = 0; j < boxes.length; j++) {
    if (i !== j) {
      result.push([boxes[i], boxes[j]]);
    }
  }
}
console.log(result);
