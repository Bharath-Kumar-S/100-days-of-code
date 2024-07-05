function reversePrint(llist) {
  // Write your code here
  let res = [];
  while (llist !== null) {
    res.push(llist.data);
    llist = llist.next;
  }
  res = res.reverse();
  res.forEach((e) => {
    console.log(e);
  });
}
