// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love

function LongestWord(sen) {
  // Remove any non-alphanumeric characters and split the string into an array of words
  const words = sen.replace(/[^a-zA-Z0-9\s]/g, "").split(" ");

  // Initialize a variable to store the longest word
  let longestWord = "";

  // Iterate through the array of words
  for (let word of words) {
    // If the current word is longer than the current longest word, update longestWord
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  // Return the longest word
  return longestWord;
}

const assert = require("assert");
assert.strictEqual(LongestWord("fun&!! time"), "time");
assert.strictEqual(LongestWord("I love dogs"), "love");
assert.strictEqual(LongestWord("Hello world123 567"), "world123");
assert.strictEqual(LongestWord("Coding is fun"), "Coding");
