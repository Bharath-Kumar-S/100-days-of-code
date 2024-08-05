class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node == null) {
      return false;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.inOrder();
console.log("------------------------");
tree.insert(2);
tree.inOrder();
console.log("------------------------");
tree.insert(8);
tree.inOrder();
tree.preOrder();
tree.postOrder();
