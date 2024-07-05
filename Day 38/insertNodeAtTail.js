function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  if (head === null) {
    head = newNode;
  } else {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  return head;
}
