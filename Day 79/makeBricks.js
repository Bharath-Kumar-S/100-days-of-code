// // We want to make a row of bricks that is goal inches long.
// We have a number of small bricks (1 inch each) and big bricks (5 inches each).
// Return true if it is possible to make the goal by choosing from the given bricks.
// This is a little harder than it looks and can be done without any loops.
// See also: Introduction to MakeBricks

// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true

const makeBricks = (small, big, goal) => {
  //   const bigBricks = Math.min(Math.floor(goal / 5), big);
  //   const remainingLength = goal - bigBricks * 5;
  //   return remainingLength <= small;

  //with modulo
  return goal - big * 5 <= small ? true : false;
};

const assert = require("assert");

assert.equal(makeBricks(3, 1, 8), true);
assert.equal(makeBricks(3, 1, 9), false);
assert.equal(makeBricks(3, 2, 10), true);
