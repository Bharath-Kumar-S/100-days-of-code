// Find Intersection
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10

const assert = require("assert");

const findIntersection = (strArr) => {
  const [first, second] = strArr.map((str) => str.split(", "));
  const intersection = first.filter((num) => second.includes(num));
  return intersection.length > 0 ? intersection.join(",") : "false";
};
assert.equal(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]), "1,4,13");
assert.equal(
  findIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]),
  "1,9,10"
);
assert.equal(findIntersection(["1, 2, 3", "4, 5, 6"]), "false");
