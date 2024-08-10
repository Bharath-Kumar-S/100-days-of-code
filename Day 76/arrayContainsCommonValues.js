const arr1 = ["a", "b", "c", "d", "x"];
const arr2 = ["w", "x", "y", "z"];

// O(n ^ 2)
const findCommonItem = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
};
// console.log(findCommonItem(arr1, arr2));
//
//
//
//
// O(a + b)
const findCommonItem1 = (arr1, arr2) => {
  let hashMap = new Map();
  for (let i = 0; i < arr1.length; i++) {
    if (!hashMap.has(arr1[i])) {
      hashMap.set(arr1[i], true);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (hashMap.has(arr2[j])) {
      return true;
    }
  }
  return false;
};
// console.log(findCommonItem1(arr1, arr2));
//
//
//
//
//
const findCommonItem2 = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};
console.log(findCommonItem2(arr1, arr2));
