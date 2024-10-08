function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};

const assert = require("assert");

assert.equal(isSameTree([1, 2, 3], [1, 2, 3]), true);
