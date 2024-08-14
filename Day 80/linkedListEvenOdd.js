// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {boolean}
 */

class Solution {
  // Function should return 0 if length is even else return 1
  isLengthEven(head) {
    // code here
    let count = 0;
    while (head !== null) {
      head = head.next;
      count++;
    }
    return count % 2 === 0;
  }
}
