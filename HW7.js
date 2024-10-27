var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    Queue.prototype.peek = function () {
        return this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    return Queue;
}());
// Testowanie kolejki dla typu number
var numberQueue = new Queue();
numberQueue.enqueue(10);
numberQueue.enqueue(20);
numberQueue.enqueue(30);
console.log("Size:", numberQueue.size()); // Size: 3
console.log("Peek:", numberQueue.peek()); // Peek: 10
console.log("Dequeue:", numberQueue.dequeue()); // Dequeue: 10
console.log("Is Empty:", numberQueue.isEmpty()); // Is Empty: false
console.log("Size after dequeue:", numberQueue.size()); // Size after dequeue: 2
// Testowanie kolejki dla typu string
var stringQueue = new Queue();
stringQueue.enqueue("apple");
stringQueue.enqueue("banana");
stringQueue.enqueue("cherry");
console.log("Size:", stringQueue.size()); // Size: 3
console.log("Peek:", stringQueue.peek()); // Peek: apple
console.log("Dequeue:", stringQueue.dequeue()); // Dequeue: apple
console.log("Is Empty:", stringQueue.isEmpty()); // Is Empty: false
console.log("Size after dequeue:", stringQueue.size()); // Size
