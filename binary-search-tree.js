class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  insert(val) {
    if(!this.root){
      this.root = new Node(val)
    }else{
      let curNode = this.root;
      
      while(curNode){
        if(curNode.val > val){
          if(!curNode.left){
            curNode.left = new Node(val)
            break;
          }
          curNode = curNode.left;

        }else if(curNode.val < val){
          if(!curNode.right){
            curNode.right = new Node(val)
            break;
          }
          curNode = curNode.right;

        }else{
          // Inserting a duplicate value: ignored;
          break;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */
  insertRecursively(val, curNode = this.root) {
    // SET ROOT
    if (!curNode) { this.root = new Node(val); }
    
    // LEFT
    else if (val < curNode.val) {
      !curNode.left
        ? curNode.left = new Node(val) // Insert new node
        : this.insertRecursively(val, curNode.left); // Continue to next node
    }

    // RIGHT
    else if (val > curNode.val) {
      !curNode.right 
        ? curNode.right = new Node(val) // Insert new node
        : this.insertRecursively(val, curNode.right); // Continue to next node
    }
    
    return this;
  }
  
  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
  find(val) {
    let curNode = this.root;
    
    while(curNode){
      if(curNode.val === val){
        return curNode;
      }else if(curNode.val > val){
        curNode = curNode.left;
      }else if(curNode.val < val){
        curNode = curNode.right;
      }
    }
    return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */
  findRecursively(val, curNode = this.root) {
    if(!curNode){
      return;
    }else if(curNode.val === val){
      return curNode;
    }else if(curNode.val > val){
      return this.findRecursively(val, curNode.left)
    }else if(curNode.val < val){
      return this.findRecursively(val, curNode.right)
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */
  // Root => Left => Right
  dfsPreOrder(node = this.root, result = []) {
    if(node) {
      // First, Current Node
      result.push(node.val);
      // Then, Left Subtree
      this.dfsPreOrder(node.left, result);
      // Finally, Right Subtree
      this.dfsPreOrder(node.right, result);
    }
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */
  // Left => Root => Right
  dfsInOrder(node = this.root, result = []) {
    if(node) {
      // First, Left Subtree
      this.dfsInOrder(node.left, result);
      // Then, Current Node
      result.push(node.val);
      // Finally, Right Subtree
      this.dfsInOrder(node.right, result);
    }
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */
  // Left => Right => Root
  dfsPostOrder(node = this.root, result = []) {
    if(node) {
      // First, Left Subtree
      this.dfsPostOrder(node.left, result);
      // Then, Right Subtree
      this.dfsPostOrder(node.right, result);
      // Finally, Current Node
      result.push(node.val);
    }
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */
  bfs() {
    let result = []
    let queue = this.root ? [this.root] : []

    while(queue.length > 0){
      const curNode = queue.shift()
      if(curNode.left)  queue.push(curNode.left)
      if(curNode.right) queue.push(curNode.right)
      result.push(curNode.val)
    }

    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */
  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}



// 15
// ______|_____
// /            \
// 10              20
// /  \               \
// 1    12              50
// \                  /  \
// 5               30    60
//             /        \
//           25          70
//          /
//         23
//           \
//            24



//      22
//        \
//         49
//           \
//            85
//           /  \
//         66    95
//              /  \
//             90   100 
//            /  \
//          88    93
//            \
//             89
           




module.exports = BinarySearchTree;
