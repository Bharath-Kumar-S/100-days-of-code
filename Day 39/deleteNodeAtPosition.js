function deleteNode(llist, position) {
  // Write your code here
  if (llist === null || llist.next === null) {
    return null;
  }
  if (position === 0) {
    return llist.next;
  }
  let current = llist;
  let currentPosition = 0;
  while (current !== null && currentPosition < position - 1) {
    current = current.next;
    currentPosition++;
  }

  if (current !== null && current.next !== null) {
    current.next = current.next.next;
  }
  return llist;
}
