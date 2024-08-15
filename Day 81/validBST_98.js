const isBst = (root) => {
  //base cases
  if (root === null) return true;

  if (root.val <= min && root.val >= max) {
    return false;
  }

  //recurence relation
  return isBst(root.left, min, root.val) && isBst(root.right, root.val, max);
};

return isBst(root, -Infinity, Infinity);
