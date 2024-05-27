class Stack {
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  // push(item)
  // pop()
  // peek()
  // isEmpty()
  // printStack()

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) return "Underflow";
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    let trace = "";
    for (const item of this.items) {
      trace += `${item} `;
    }
    return trace;
  }
}

(async () => {
  const stack_ = new Stack();
  let arr = [1, 2, 3, 4, 5, 6, 768, 8, 9, 9, 10];
  for (const a of arr) {
    stack_.push(a);
  }

  console.log("Print stack", stack_.printStack());

  console.log("peek", stack_.peek());

  console.log("pop", stack_.pop());

  console.log("peek", stack_.peek());

  console.log("isEmpty", stack_.isEmpty());
})();
