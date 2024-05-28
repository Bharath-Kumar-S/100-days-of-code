class Queue {
  constructor() {
    this.item = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.item[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.item[this.front];
    delete this.item[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.item[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.item);
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
