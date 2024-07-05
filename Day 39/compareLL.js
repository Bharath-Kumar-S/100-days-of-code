function CompareLists(llist1, llist2) {
  let current1 = llist1;
  let current2 = llist2;

  while (current1 !== null && current2 !== null) {
    if (current1.data !== current2.data) {
      return false;
    }
    current1 = current1.next;
    current2 = current2.next;
  }

  // If both lists reached the end, they are identical
  return current1 === null && current2 === null;
}
