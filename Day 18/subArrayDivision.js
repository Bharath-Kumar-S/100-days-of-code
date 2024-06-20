// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example

// Lily wants to find segments summing to Ron's birth day,  with a length equalling his birth month, . In this case, there are two segments meeting her criteria:  and .

// Function Description

// Complete the birthday function in the editor below.

// birthday has the following parameter(s):

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month
// Returns

// int: the number of ways the bar can be divided
// Input Format

// The first line contains an integer , the number of squares in the chocolate bar.
// The second line contains  space-separated integers , the numbers on the chocolate squares where .
// The third line contains two space-separated integers,  and , Ron's birth day and his birth month.

// Constraints

// , where ()
// Sample Input 0

// 5
// 1 2 1 3 2
// 3 2
// Sample Output 0

// 2
// Explanation 0

// Lily wants to give Ron  squares summing to . The following two segments meet the criteria:

// image

// Sample Input 1

// 6
// 1 1 1 1 1 1
// 3 2
// Sample Output 1

// 0
// Explanation 1

// Lily only wants to give Ron  consecutive squares of chocolate whose integers sum to . There are no possible pieces satisfying these constraints:

// image

// Thus, we print  as our answer.

// Sample Input 2

// 1
// 4
// 4 1
// Sample Output 2

// 1
// Explanation 2

// Lily only wants to give Ron  square of chocolate with an integer value of . Because the only square of chocolate in the bar satisfies this constraint, we print  as our answer.

function birthday(s, d, m) {
  let count = 0;

  // Iterate through the array, stopping so that there are at least m elements left to consider
  for (let i = 0; i <= s.length - m; i++) {
    // Calculate the sum of the segment starting at index i and having length m
    let sum = 0;
    for (let j = 0; j < m; j++) {
      sum += s[i + j];
    }

    // If the sum of this segment is equal to d, increment the count
    if (sum === d) {
      count++;
    }
  }

  return count;
}

// Explanation
// Initialization:

// Initialize count to 0 to keep track of the number of valid segments.
// Initialize currentSum to 0 to store the sum of the current window of size m.
// Calculate the Sum of the First Window:

// Use a for loop to calculate the sum of the first window of size m.
// Check the First Window:

// If currentSum equals d, increment the count.
// Slide the Window:

// Use another for loop to slide the window from the start of the array to the end.
// For each new element in the window, update currentSum by adding the new element and subtracting the element that is no longer in the window (i.e., the element m positions behind the current element).
// If currentSum equals d, increment the count.
// Return the Result:

// Return the total count of valid segments.

//sliding window

function birthday(s, d, m) {
  let count = 0;
  let currentSum = 0;

  // Use a single loop to handle the sliding window
  for (let i = 0; i < s.length; i++) {
    // Add the current element to the current sum
    currentSum += s[i];

    // When we have hit the window size of m, we start checking
    if (i >= m - 1) {
      // If the sum of the current window is equal to d, increment the count
      if (currentSum === d) {
        count++;
      }

      // Subtract the element that is leaving the window
      currentSum -= s[i - (m - 1)];
    }
  }

  return count;
}
