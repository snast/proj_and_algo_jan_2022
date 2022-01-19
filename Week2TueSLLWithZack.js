class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    addFront(value){
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    // Remove the first SLL Node that contains the value passed in. Keep all other Nodes in the proper order.
    removeVal(value){
        if (this.head == null){
            return this.head;
        }
        if (this.head.val == value){
            this.head = this.head.next;
            return this.head;
        }
        let runner = this.head;
        while(runner.next != null){
            if(runner.next.val == value){
                runner.next = runner.next.next;
                return this.head;
            }
            runner = runner.next;
        }
        console.log("does not exist")
        return this.head;
    }

}

sll1 = new SLL();
node1 = new Node(13);
sll1.head = node1;
node2 = new Node(10);
node1.next = node2;

console.log(sll1.addFront(2));
console.log(sll1.removeVal(2));
























// for(var i = 0; i < 5; i++){
//     // other code
// }

// let i = 0;
// while(i < 5){
//     // other code
//     i++;
// }


// let runner = this.head;
// while(runner.next != null){
//     // other code
//     runner = runner.next;
// }