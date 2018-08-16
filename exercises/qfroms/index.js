// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor(inbox, outbox) {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  add(element) {
    this.inbox.push(element);
  }

  remove(){
    while (this.inbox.peek()) {
      this.outbox.push(this.inbox.pop());
    }

    const result = this.outbox.pop();

    while (this.outbox.peek()) {
      this.inbox.push(this.outbox.pop());
    }

    return result;
  }

  peek() {
    while (this.inbox.peek()) {
      this.outbox.push(this.inbox.pop());
    }

    const result = this.outbox.peek();

    while (this.outbox.peek()) {
      this.inbox.push(this.outbox.pop());
    }

    return result;
  }
}

module.exports = Queue;
