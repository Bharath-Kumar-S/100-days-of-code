// 145 Postorder tree traversal

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postOrder = (root) => {
  let result = [];
  const Postorder = (root) => {
    if (!root) {
      return;
    }
    Postorder(root.left);
    Postorder(root.right);
    result.push(root.val);
  };
  Postorder(root);
  return result;
};
