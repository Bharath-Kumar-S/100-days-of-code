// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

const assert = require("assert");

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// Example

// After one jump, they are both at , (, ), so the answer is YES.

// Function Description

// Complete the function kangaroo in the editor below.

// kangaroo has the following parameter(s):

// int x1, int v1: starting position and jump distance for kangaroo 1
// int x2, int v2: starting position and jump distance for kangaroo 2
// Returns

// string: either YES or NO
// Input Format

// A single line of four space-separated integers denoting the respective values of , , , and .

// Constraints

// Sample Input 0

// 0 3 4 2
// Sample Output 0

// YES
// Explanation 0

// The two kangaroos jump through the following sequence of locations:

// image

// From the image, it is clear that the kangaroos meet at the same location (number  on the number line) after same number of jumps ( jumps), and we print YES.

// Sample Input 1

// 0 2 5 3
// Sample Output 1

// NO
// Explanation 1

// The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., ).
// Because the second kangaroo moves at a faster rate (meaning ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.

function kangaroo(x1, v1, x2, v2) {
  // If the second kangaroo is ahead and jumps farther or equal to the first one, they will never meet
  if ((x1 < x2 && v1 <= v2) || (x2 < x1 && v2 <= v1)) {
    return "NO";
  }

  // Calculate if they meet at the same position
  // Check the difference in starting points and the difference in jump distances
  if ((x2 - x1) % (v1 - v2) === 0) {
    return "YES";
  }

  return "NO";
}

assert.equal(kangaroo(0, 3, 4, 2), "YES");
assert.equal(kangaroo(0, 2, 5, 3), "NO");

// Explanation
// Check Initial Conditions:
// If one kangaroo starts ahead and jumps farther or equal to the other, they will never meet. For example, if x1 < x2 and v1 <= v2, kangaroo 1 can never catch up to kangaroo 2.
// Check if They Will Meet:
// For the kangaroos to meet after the same number of jumps, the difference in their starting positions must be divisible by the difference in their jump distances.
// This can be expressed as: (x2 - x1) % (v1 - v2) === 0.
// If this condition is true, then the kangaroos will land on the same position after the same number of jumps.
// Edge Cases
// Same Starting Point and Jump Distance:

// If x1 == x2 and v1 == v2, they are already together and will keep landing on the same positions.
// This is implicitly handled by the condition (x2 - x1) % (v1 - v2) === 0.
// Kangaroos Never Meet:

// If one kangaroo is ahead and jumps farther or the same distance as the other, they will never meet, which is handled by the initial check.
// This solution efficiently determines whether the two kangaroos will meet on the same position after the same number of jumps using simple arithmetic and conditional checks.
