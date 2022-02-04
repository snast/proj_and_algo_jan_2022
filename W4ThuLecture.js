class BSTNode {
    constructor(value) {
        this.val = value
        this.left = null;
        this.right = null;
    }
}

myBSTNode = new BSTNode(10);

class BST {
    constructor() {
        //Assuming we want to create blank BST when initiazing BST object
        this.root = null;
    }

    //Uses a stack with iteration or relies on recursion(stack)
    printPreOrder(curNode = this.root) {
        if(curNode !== null) {
            console.log(curNode.val);
            this.printPreOrder(curNode.left);
            this.printPreOrder(curNode.right);
        }
    }

    printInOrder(curNode = this.root) {
        if(curNode !== null) {
            this.printInOrder(curNode.left);
            console.log(curNode.val);
            this.printInOrder(curNode.right);
        }
    }

    printPostOrder(curNode = this.root) {
        if(curNode !== null) {
            this.printPostOrder(curNode.left);
            this.printPostOrder(curNode.right);
            console.log(curNode.val);
        }
    }
    //Uses a queue instead of a stack
    printBFSOrder() {
        var nodes = [];
        nodes.push(this.root);
        var curr;
        while (nodes.length !== 0) {
            curr = nodes.shift();
            if(curr.left !== null) {
                nodes.push(curr.left);
            }
            if(curr.right !== null) {
                nodes.push(curr.right);
            }
            console.log(curr.val);
        }
        
    }

    //use recursion to determine the size of the tree
    size(curNode = this.root) {
        //Base Case
        // What state does curNode need to be in
        //to stop the recursion
        if(curNode === null) {
            return 0;
        }

        //recursive step
        // the size of the tree
        // size of the left subtree + 
        //size of the right subtree + 
        // the node itself
        return this.size(curNode.left) + this.size(curNode.right) + 1;
    }
    //myBST.size() assuming curNode is root
    //

    // //returns true is value is in tree
    // contains(val) {
    //     //find the value
    //     if(curr.val === val) {
    //         return true;
    //     }
    //     //value wasnt found
    //     return false;
    // }

    add(val) {
        //use case for empty BST
        if(this.root === null) {
            this.root = new BSTNode(val);
            return this;
        }

        var curr = this.root;
        //if val is greater than curr.val -> curr = curr.right
        // if val is less than curr.val - > curr = curr.left
        // what happens if curr.right or curr.left is null
        //
        while(curr) {
            // current node value is less than value to be added
            // we need to go to the right child, if right child is null, add new node to right child
            // if right child is not null, make curr = curr.right
            if(curr.val < val) {
                if(curr.right === null) {
                    curr.right = new BSTNode(val);
                    return this;
                }
                //curr.right was not null
                curr = curr.right;

            } else {
                if(curr.left === null) {
                    curr.left = new BSTNode(val);
                    return this;
                }
                curr = curr.left;

            }
        }

        //try to find correct place for node


    }
}

myBST = new BST();
myBST.add(3).add(5).add(1).add(2).add(4).add(21);
console.log("Printing BFS");
myBST.printBFSOrder();
console.log("Printing In Order");
myBST.printInOrder();
console.log("Printing Pre Order");
myBST.printPreOrder();
console.log("Printing Post Order");
myBST.printPostOrder();
console.log("BST size " + myBST.size());

//          1
//        2   3
//      4   5

//DFS Tree Traversals
//In order(left, root, right)
//  4, 2, 5, 1, 3
// Preorder(root, left, right)
// 1, 2, 4, 5, 3
//Postorder(left, right, root)
// 4, 5, 2, 3, 1

//BFS Tree Traversal
// 1, 2, 3, 4, 5


