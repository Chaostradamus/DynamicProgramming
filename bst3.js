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
  insert(value) {
    let newNode = new Node(value);
    this.count++;
    const search = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          search(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          search(node.right);
        }
      }
    };
    search(this.root);
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

  contains(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      else if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
    }
    return false;
  }

  inorder() {
    let result = [];

    const travel = (node) => {
      if (node.left) travel(node.left);
      result.push(node.value);
      if (node.right) travel(node.right);
    };
    travel(this.root);
    return result;
  }
  preorder() {
    let result = [];

    const travel = (node) => {
      if (node.left) travel(node.left);
      if (node.right) travel(node.right);
      result.push(node.value);
    };
    travel(this.root);
    return result;
  }
  postorder() {
    let result = [];

    const travel = (node) => {
      result.push(node.value);
      if (node.left) travel(node.left);
      if (node.right) travel(node.right);
    };
    travel(this.root);
    return result;
  }

  bfs() {
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
bst.insert(16);
bst.insert(24);
bst.insert(36);
bst.insert(26);
bst.insert(3);
bst.insert(4);

console.log(bst.inorder());
console.log(bst.preorder());
console.log(bst.postorder());
