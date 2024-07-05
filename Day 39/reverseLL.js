function reverse(llist) {
  // Write your code here
  let prev = null;
  let current = llist;
  let next = null;

  while (current !== null) {
    next = current.next; // Store next node
    current.next = prev; // Reverse current node's pointer
    prev = current; // Move pointers one position ahead
    current = next;
  }
  return prev;
}
