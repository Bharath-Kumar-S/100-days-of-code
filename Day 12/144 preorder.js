// 144 Preorder tree traversal

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preOrder = (root) => {
  let result = [];
  const Preorder = (root) => {
    if (!root) {
      return;
    }
    result.push(root.val);
    Preorder(root.left);
    Preorder(root.right);
  };
  Preorder(root);
  return result;
};
