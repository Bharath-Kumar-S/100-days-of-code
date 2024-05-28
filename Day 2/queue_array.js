class Queue {
  constructor() {
    this.item = [];
  }

  enqueue(element) {
    this.item.push(element);
  }

  dequeue() {
    return this.item.shift();
  }

  isEmpty() {
    return this.item.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.item[0];
    }
    return null;
  }

  size() {
    return this.item.length();
  }

  print() {
    console.log(this.item.toString());
  }
}

const q = new Queue();
console.log(q.isEmpty());
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
console.log(q.isEmpty());
console.log(q.dequeue());
