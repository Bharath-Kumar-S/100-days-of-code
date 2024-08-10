// Given a linked list, your task is to complete the function isLengthEven() which contains the head of the linked list, and check whether the length of the linked list is even or not. Return true if it is even, otherwise false.

// Examples:

// Input: Linked list: 12->52->10->47->95->0

// Output: true
// Explanation: The length of the linked list is 6 which is even, hence returned true.
// Input: Linked list: 9->4->3

// Output: false
// Explanation: The length of the linked list is 3 which is odd, hence returned false.
// Expected Time Complexity: O(n)
// Expected Auxillary Space: O(1)

// Constraints:
// 1 <= number of nodes <= 105
// 1 <= elements of the linked list <= 105

//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

function printList(head) {
  let s = "";
  while (head) {
    s += head.data;
    s += " ";
    head = head.next;
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));

    let head = new Node(arr[0]);
    let tail = head;
    for (let j = 1; j < arr.length; j++) {
      tail.next = new Node(arr[j]);
      tail = tail.next;
    }
    let obj = new Solution();
    let f = obj.isLengthEven(head);
    if (f) console.log("true");
    else console.log("false");
  }
}
// } Driver Code Ends

// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {boolean}
 */

class Solution {
  // Function should return 0 if length is even else return 1
  isLengthEven(head) {
    // code here
    let count = 0;
    while (head !== null) {
      count++;
      head = head.next;
    }
    return count % 2 === 0;
  }
}
