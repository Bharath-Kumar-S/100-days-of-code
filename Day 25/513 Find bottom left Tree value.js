// 513  Find Bottom Left Tree Value
// Given the root of a binary tree, return the leftmost value in the last row of the tree.

// Example 1:

// Input: root = [2,1,3]
// Output: 1
// Example 2:

// Input: root = [1,2,3,4,null,5,6,null,null,7]
// Output: 7

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (!root) return null;
  let queue = [root];
  let leftMostValue = root.val;
  while (queue.length > 0) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      if (i === 0) {
        leftMostValue = node.val;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return leftMostValue;
};
