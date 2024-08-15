const frequentWords = (words, k) => {
  const wordsMap = new Map();

  for (let word of words) {
    if (wordsMap.has(word)) {
      wordsMap.set(word, wordsMap.get(word) + 1);
    } else {
      wordsMap.set(word, 1);
    }
  }

  const arr = new Array();
  for (let key of wordsMap.keys()) {
    arr.push(key);
  }

  arr.sort();
  arr.sort((a, b) => wordsMap.get(b) - wordsMap.get(a));

  return arr.slice(0, k);
};
