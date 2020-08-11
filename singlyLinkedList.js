class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push (val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }
    pop () {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        return current.val;
    }
    shift () {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = this.head.next;
        current.next = null;
        this.length--;
        return current.val;
    }
    unshift (val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }
    get (index) {
        if (index < 0 || index > this.length) return undefined;
        let current = 0;
        let indexedNode = this.head;
        while (current < index) {
            indexedNode = indexedNode.next;
            current++;
        }
        return indexedNode.val;
    }
    set (value, index) {
        if (index < 0 || index > this.length) return undefined;
        let current = 0;
        let indexedNode = this.head;
        while (current < index) {
            indexedNode = indexedNode.next;
            current++;
        }
        indexedNode.val = value;
    }
    addAtIndex (value, index) {
        if (index < 0 || index > this.length) return undefined;
        let newNode = new Node(value);
        let currentIndex=0;
        let current = this.head;
        let newTail = current;
        while (currentIndex < index) {
            newTail = current;
            current = current.next;
            currentIndex++;
        }
        newTail.next = newNode;
        newNode.next = current;
        this.length++;
    },
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;

        for(let i=0;i<this.length;i++){
            next = node.next;
            node.next = prev;
            
        }

    }
}

var list = new SingleLinkedList();
list.push("Apple");
list.push("Banana");
list.push("Orange");

let popped = list.pop();
console.log("popped", popped)
console.log("list", list);
list.push("Orange");

popped = list.shift();
console.log("popped", popped)
console.log("list", list);

list.unshift("Tomato");
console.log("list", list);

popped = list.get(2);
console.log("popped", popped);
popped = list.get(1);
console.log("popped", popped);
list.set("Grapes", 1);
console.log("list", list);

list.addAtIndex("Wine", 1);
console.log("list", list);