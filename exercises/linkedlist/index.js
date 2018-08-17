// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count += 1;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previousNode = this.head;
    let node = this.head.next;

    while (node.next) {
      previousNode = node;
      node = node.next;
    }
    previousNode.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(integer) {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    let count = 0;
    while (node) {
      if (count === integer) {
        return node;
      }
      count += 1;
      node = node.next;
    }
    return null;
  }
}

module.exports = { Node, LinkedList };
