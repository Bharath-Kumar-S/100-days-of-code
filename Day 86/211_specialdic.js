var WordDictionary = function () {
  this.trie = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.trie;
  for (let c of word) {
    if (!node[c]) node[c] = {};
    node = node[c];
  }
  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.dfs = function (word, trie, index) {
  //base case
  if (word.length === index) {
    return trie.isEnd ? true : false;
  }
  let char = word[index];

  // If the current character is a '.', we must check all possible paths
  if (char === ".") {
    for (let key in trie) {
      if (key !== "isEnd" && this.dfs(word, trie[key], index + 1)) {
        return true;
      }
    }
  } else {
    // If the current character is in the trie, continue DFS
    if (trie[char]) {
      return this.dfs(word, trie[char], index + 1);
    }
  }
  // If no match found, return false
  return false;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  //using dfs
  return this.dfs(word, this.trie, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
