// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const holder = {};
  let max = 0;
  let result = '';

  for (let char of str) {
    if (!holder[char]) {
      holder[char] = 1
    } else {
      holder[char] += 1;
    }
  }

  const chars = Object.keys(holder);
  for (let char of chars) {
    if (holder[char] > max) {
      max = holder[char];
      result = char;
    }
  }

  return result;
}

module.exports = maxChar;
