// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Example

// There are two numbers between the arrays:  and .
// , ,  and  for the first value.
// ,  and ,  for the second value. Return .

// Function Description

// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

// int a[n]: an array of integers
// int b[m]: an array of integers
// Returns

// int: the number of integers that are between the sets
// Input Format

// The first line contains two space-separated integers,  and , the number of elements in arrays  and .
// The second line contains  distinct space-separated integers  where .
// The third line contains  distinct space-separated integers  where .

// Constraints

// Sample Input

// 2 3
// 2 4
// 16 32 96
// Sample Output

// 3
// Explanation

// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.

// 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.

// Function to calculate GCD using Euclidean algorithm
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Function to calculate LCM using the relation LCM(a, b) * GCD(a, b) = a * b
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Function to calculate GCD of an array of numbers
function gcdArray(arr) {
  return arr.reduce((acc, val) => gcd(acc, val));
}

// Function to calculate LCM of an array of numbers
function lcmArray(arr) {
  return arr.reduce((acc, val) => lcm(acc, val));
}

// Main function to solve the problem
function getTotalX(a, b) {
  const lcmA = lcmArray(a);
  const gcdB = gcdArray(b);
  let count = 0;

  // Count multiples of lcmA that evenly divide gcdB
  for (let i = lcmA; i <= gcdB; i += lcmA) {
    if (gcdB % i === 0) {
      count++;
    }
  }

  return count;
}

// Explanation
// GCD and LCM Helper Functions:

// gcd(a, b): Computes the greatest common divisor of a and b using the Euclidean algorithm.
// lcm(a, b): Computes the least common multiple of a and b using the formula LCM(a, b) = (a * b) / GCD(a, b).
// gcdArray(arr): Computes the GCD of an array by reducing the array using the gcd function.
// lcmArray(arr): Computes the LCM of an array by reducing the array using the lcm function.
// LCM of Array a:

// The LCM of the array a is the smallest number that all elements in a can divide. This is the starting point for finding numbers that are multiples of all elements in a.
// GCD of Array b:

// The GCD of the array b is the largest number that can divide all elements in b. This is the ending point for finding numbers that can divide all elements in b.
// Count Multiples:

// Iterate through multiples of lcmA from lcmA to gcdB.
// For each multiple, check if it divides gcdB evenly. If it does, increment the count.
// Return Result:

// The count of such numbers is the result, representing the number of integers between the two sets.
// This solution ensures efficient calculation of the required numbers using mathematical properties of GCD and LCM, providing an optimal and clear approach to the problem.
