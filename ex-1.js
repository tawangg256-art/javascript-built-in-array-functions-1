let words = ["hello", "world"];

function getWordLengths(words) {
  const wordLengths = words.map((num) => num = num.length);
  return wordLengths;
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
