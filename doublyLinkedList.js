class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
        }
    }
    pop () {
        if (!this.head) return;
        if (this.length == 1) {
            let popV = this.head.val;
            this.head = null;
            this.tail = null;
            return popV;
        }
        let current = this.head;
        while (current.next) {
            current = current.next
        }
        let popV = current.val
        this.tail = current.prev;
        current.prev.next = null;
        this.length--;
        return popV;
    }
    shift(){
        if (!this.head) return;
        if (this.length == 1) {
            let popV = this.head.val;
            this.head = null;
            this.tail = null;
            return popV;
        }
        let vShift = this.head.val;
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        return vShift;
    }
    addAtIndex (value, index) {
        if (index < 0 || index > this.length) return undefined;
        let newNode = new Node(value);
        let currentIndex = 0;
        let current = this.head;
        while (currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
        console.log(current.val)
        newNode.next = current.next;
        current.next.prev = newNode;
        current.next = newNode;
        newNode.prev = current;
        this.length++;
    }
    getAllValues(){
        if (!this.head) return [];
        let vals = [];
        let current = this.head;
        while(current.next){
            vals.push(current.val)
            current = current.next
        }
        vals.push(current.val);
        return vals;
    }
}

let dList = new DoublyLinkedList();
dList.push(3);

dList.push(5);

dList.push(10);


const popped = dList.pop();
console.log(popped);

dList.push(13);

dList.push(45);

dList.push(140);


console.log(dList.getAllValues());
dList.addAtIndex(40,2)
console.log(dList.getAllValues());
// const vShift = dList.shift();

// console.log(vShift);

//console.log(dList.getAllValues());