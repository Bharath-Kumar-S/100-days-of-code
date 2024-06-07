/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const assert = require("assert");

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let res = [];
  const DFS = (root) => {
    if (root === null) return;
    DFS(root.left);
    res.push(root.val);
    DFS(root.right);
  };
  DFS(root);
  return res;
};

assert.deepEqual(inorderTraversal([1, null, 2, 3]), [1, 3, 2]);
