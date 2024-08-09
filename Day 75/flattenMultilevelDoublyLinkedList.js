/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function (head) {
  if (!head) return head;

  let current = head;

  while (current !== null) {
    // If the current node has a child
    if (current.child) {
      // Store the next node
      let next = current.next;

      // Flatten the child list recursively
      let child = flatten(current.child);

      // Insert the child list into the current level
      current.next = child;
      child.prev = current;

      // Clear the child pointer
      current.child = null;

      // Traverse to the end of the child list
      while (current.next !== null) {
        current = current.next;
      }

      // Reconnect the previously stored next node
      current.next = next;
      if (next !== null) {
        next.prev = current;
      }
    }

    // Move to the next node
    current = current.next;
  }

  return head;
};
