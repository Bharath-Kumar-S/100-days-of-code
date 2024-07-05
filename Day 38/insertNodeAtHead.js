function insertNodeAtHead(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  if (head === null) {
    head = newNode;
    return head;
  } else {
    newNode.next = head;
  }
  return newNode;
}
