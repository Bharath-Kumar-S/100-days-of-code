// Given three ints, a b c, one of them is small, one is medium and one is large.
// Return true if the three values are evenly spaced,
// so the difference between small and medium is the same as the difference between medium and large.

// evenlySpaced(2, 4, 6) → true
// evenlySpaced(4, 6, 2) → true
// evenlySpaced(4, 6, 3) → false

const assert = require("assert");

const evenlySpaced = (a, b, c) => {
  let small, medium, large;
  if (a < b && a < c) {
    small = a;
    if (b < c) {
      medium = b;
      large = c;
    } else {
      medium = c;
      large = b;
    }
  } else if (b < a && b < c) {
    small = b;
    if (a < c) {
      medium = a;
      large = c;
    } else {
      medium = c;
      large = a;
    }
  } else {
    small = c;
    if (a < b) {
      medium = a;
      large = b;
    } else {
      medium = b;
      large = a;
    }
  }

  return medium - small === large - medium;
};

assert.equal(evenlySpaced(2, 4, 6), true);
assert.equal(evenlySpaced(4, 6, 2), true);
assert.equal(evenlySpaced(4, 6, 3), false);
