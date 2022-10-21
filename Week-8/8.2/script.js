class Tree{
    constructor(data){
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

function isValidBST(node, min, max) {
  if (node === null) {
    return true;
  }
  
  if (
    (max !== null && node.value > max) ||
    (min !== null && node.value < min)
  ) {
    return false;
  }
  
  if (
    !isValidBST(node.left, min, node.value) ||
    !isValidBST(node.right, node.value, max)
  ) {
    return false;
  }
  return true;
}

root = new Tree(4);
root.left = new Tree(2);
root.right = new Tree(5);
root.left.left = new Tree(1);
root.left.right = new Tree(3)

console.log("BST is", isValidBST(root, Number.MIN_VALUE, Number.MAX_VALUE));

// Time Complexity - O(N) - as the program traverses through all the nodes. 
// Space Complexity - O(1) - as no new stack was created.