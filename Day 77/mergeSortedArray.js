const mergeSortedArrays = (arr1, arr2) => {
  //base case
  if (!arr1.length) {
    return arr2;
  }
  if (!arr2.length) {
    return arr1;
  }

  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    result.push(...arr1.slice(i));
    i = arr1.length;
  }

  if (j < arr2.length) {
    result.push(...arr2.slice(j));
    j = arr2.length;
  }

  return result;
};

console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));
