const reverseString = (str) => {
  //base case
  if (!str || str.length < 2 || typeof str !== "string") return str;

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

const reverseString2 = (str) => {
  return str.split("").reverse().join("");
};

const reverseString3 = (str) => [...str].reverse().join("");

console.log(reverseString("hello") === "olleh");
console.log(reverseString2("hello") === "olleh");
console.log(reverseString3("hello") === "olleh");
