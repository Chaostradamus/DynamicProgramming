class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  min() {
    let current = this.root;

    while (current.left) current = current.left;
    return current.value;
  }
  max() {
    let current = this.root;

    while (current.right) current = current.right;
    return current.value;
  }

  insert(value) {
    let newNode = new Node(value);
    this.count++;

    const traverse = (node) => {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          traverse(node.left);
        }
      } else if (newNode.value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          traverse(node.right);
        }
      }
    };
    traverse(this.root);
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      if (value < current.value) current = current.left;
      if (value > current.value) current = current.right;
    }
    return false;
  }

  inOrder() {
    let result = [];

    this.count++;

    const traverse2 = (node) => {
      if (node.left) traverse2(node.left);
      result.push(node.value);
      if (node.right) traverse2(node.right);
    };
    traverse2(this.root);
    return result;
  }
  preOrder() {
    let result = [];
    let current = this.root;
    const traverse2 = (node) => {
      result.push(current.value);
      if (current.value < node.value) traverse2(current.left);
      if (current.value > node.value) traverse2(current.right);
    };
    traverse2(this.root);

    return result;
  }
  postOrder() {
    let result = [];
    let current = this.root;
    const traverse2 = (node) => {
      if (current.value < node.value) traverse2(node.left);
      if (current.value > node.value) traverse2(node.right);
      result.push(current.value);
    };
    traverse2(this.root);
    return result;
  }

  bsf() {
    let result = [];
    let queue = [];

    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }
}
const bst = new BST(6);
bst.insert(24);
bst.insert(36);
bst.insert(16);
bst.insert(3);
bst.insert(1);

console.log(bst.inOrder());
console.log(bst.contains(18));
