const assert = require("assert");
const phoneHashMap = (input) => {
  let arr = input.split("\n");
  let length = Number(arr[0]);
  let phoneBook = new Map();

  for (let i = 1; i <= length; i++) {
    const [name, number] = arr[i].split(" ");
    phoneBook.set(name, number);
  }

  for (let i = length + 1; i < arr.length; i++) {
    const queryName = arr[i];
    if (phoneBook.has(queryName)) {
      console.log(`${queryName}=${phoneBook.get(queryName)}`);
    } else {
      console.log("Not found");
    }
  }
};
phoneHashMap(`3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`);
