/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function (words, master) {
  // Helper function to count matching characters at the same positions
  const countMatches = (word1, word2) => {
    let matches = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) {
        matches++;
      }
    }
    return matches;
  };

  // Main logic to find the secret word
  while (words.length > 0) {
    // Pick a random word from the current list
    const randomWord = words[Math.floor(Math.random() * words.length)];

    // Guess the word using the master API
    const response = master.guess(randomWord);
    console.log("Response:", response);

    // If the guess is correct, exit the loop
    if (response === 6) {
      return;
    }

    // Filter the word list to only include words with the same match count
    words = words.filter((word) => countMatches(word, randomWord) === response);
  }
};
