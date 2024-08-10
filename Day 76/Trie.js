class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }

  searchPrefix(word) {
    let node = this.root;
    let prefix = "";
    for (let char of word) {
      if (!node.children[char]) break;
      node = node.children[char];
      prefix += char;
      if (node.isWord) return prefix;
    }
    return word;
  }
}

function replaceWords(dictionary, sentence) {
  const trie = new Trie();
  for (let root of dictionary) {
    trie.insert(root);
  }

  const words = sentence.split(" ");
  const result = words.map((word) => trie.searchPrefix(word));
  return result.join(" ");
}

const dictionary = ["cat", "bat", "rat"];
const sentence = "the cattle was rattled by the battery";
console.log(replaceWords(dictionary, sentence));
