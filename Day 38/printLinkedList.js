// class LinkedList {
//     constructor(){
//         this.head = null; // beginning of the list
//         this.length = 0;
//     }

//     // add a node to the end of the list
//     add(node){
//         if(this.head === null){
//             this.head = node;
//         } else {
//             let currentNode = this.head;
//             while(currentNode.next){
//                 currentNode = currentNode.next;
//             }
//             currentNode.next = node;
//         }
//         this.length++;
//     }

//     // add a node to the beginning of the list
//     addToHead(node){
//         if(this.head === null){
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.length++;
//     }

//     // remove a node from the list
//     remove(node){
//         if(this.head === null){
//             return;
//         } else if(this.head === node){
//             this.head = node.next;
//         } else {
//             let currentNode = this.head;
//             while(currentNode.next !== node){
//                 currentNode = currentNode.next;
//             }
//             currentNode.next = node.next;
//         }
//         this.length--;
//     }

//     // get the length of the list
//     getLength(){
//         return this.length;
//     }

//     // print the list
//     print(){
//         let currentNode = this.head;
//         while(currentNode){
//             console.log(currentNode.data);
//             currentNode = currentNode.next;
//         }
//     }
// }

function printLinkedList(head) {
  while (head !== null) {
    console.log(head.data);
    head = head.next;
  }
}
