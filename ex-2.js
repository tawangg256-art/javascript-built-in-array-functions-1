let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  const numWords = words.filter((num) => num.length >= 5);
  return numWords;
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
