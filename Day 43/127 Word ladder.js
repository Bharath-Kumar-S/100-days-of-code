// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

// Constraints:

// 1 <= beginWord.length <= 10
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let wordsSet = new Set(wordList);
  let queue = [[beginWord, 1]];

  // BFS

  while (queue.length) {
    let [currentWord, count] = queue.shift();
    if (currentWord === endWord) {
      return count;
    }
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < currentWord.length; j++) {
        let letter = String.fromCharCode(97 + i);
        let newWord =
          currentWord.slice(0, j) + letter + currentWord.slice(j + 1);

        if (wordsSet.has(newWord)) {
          queue.push([newWord, count + 1]);
          wordsSet.delete(newWord);
        }
      }
    }
  }
  return 0;
};
