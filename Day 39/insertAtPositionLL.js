function insertNodeAtPosition(llist, data, position) {
  // Write your code here
  const newNode = new SinglyLinkedListNode(data);
  //base case
  if (llist === null) {
    llist = newNode;
    return llist;
  }

  if (position === 0) {
    newNode.next = llist;
    return newNode;
  }
  let currentPosition = 0,
    current = llist;

  while (currentPosition < position - 1 && current !== null) {
    current = current.next;
    currentPosition++;
  }

  if (current !== null) {
    newNode.next = current.next;
    current.next = newNode;
  }

  return llist;
}
