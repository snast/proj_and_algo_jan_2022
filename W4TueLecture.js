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
console.log(myBST);
console.log(myBST.size());

