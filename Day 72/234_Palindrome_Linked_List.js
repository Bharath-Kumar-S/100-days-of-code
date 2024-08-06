// Given the head of a singly linked list, return true if it is a
// palindrome
//  or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true
// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true;

  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let prev = null;
  while (slow !== null) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Step 3: Compare the first half and the reversed second half
  let left = head;
  let right = prev;
  while (right !== null) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  // Optional Step 4: Restore the list (if required)
  // This step is not required for the problem but can be done if needed
  // slow = prev;
  // prev = null;
  // while (slow !== null) {
  //     let next = slow.next;
  //     slow.next = prev;
  //     prev = slow;
  //     slow = next;
  // }

  return true;
};
