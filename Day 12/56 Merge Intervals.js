// 56 Merge Intervals |M|

const assert = require("assert");

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

const mergeIntervals = (intervals) => {
  if (intervals.length <= 1) return intervals;

  // Sort intervals based on their start values
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (currentInterval[1] >= intervals[i][0]) {
      // There is an overlap, so merge the current and next intervals
      currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
    } else {
      // No overlap, push the current interval to merged and move to the next
      merged.push(currentInterval);
      currentInterval = intervals[i];
    }
  }

  // Push the last interval
  merged.push(currentInterval);

  return merged;
};

const res = mergeIntervals([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);

assert.equal(res, [
  [1, 6],
  [8, 10],
  [15, 18],
]);
