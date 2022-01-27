class Node {
  constructor(value) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  costructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }
  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      }

      if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        }
      } else {
        searchTree(node.right);
      }
    };
    searchTree(this.root);
  }

  min() {}

  max() {}

  contains() {}

  inOrder() {}

  preOrder() {}

  postOrder() {}

  bfs() {}
}

const bst = new BST(16);

bst.insert(1);
bst.insert(24);
bst.insert(6);
bst.insert(36);
bst.insert(26);
bst.insert(27);
bst.insert(9);
