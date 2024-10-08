const findGameWinner = (n, k) => {
  // create a queue
  const queue = [];
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }
  while (queue.length > 1) {
    let toRemove = k - 1;
    while (toRemove > 0) {
      queue.push(queue.shift());
      toRemove--;
    }
    queue.shift();
  }
  return queue.shift();
};

console.log(findGameWinner(5, 2));
