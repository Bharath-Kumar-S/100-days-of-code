const Trie = function () {
  this.root = {};
};

Trie.prototype.insert = function (word) {
  let node = this.root;
  for (const c of word) {
    if (!node[c]) node[c] = {};
    node = node[c];
  }
  node.isWord = true;
};

Trie.prototype.traverse = function (word) {
  let node = this.root;
  for (const c of word) {
    if (!node[c]) return null;
    node = node[c];
  }
  return node;
};

Trie.prototype.search = function (word) {
  let node = this.traverse(word);
  return node !== null && node.isWord === true;
};

Trie.prototype.searchPrefix = function (word) {
  let node = this.traverse(word);
  return node !== null;
};

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.searchPrefix("app"));
trie.insert("app");
console.log(trie.searchPrefix("app"));
console.log(trie.search("app"));
console.log("All tests passed");
