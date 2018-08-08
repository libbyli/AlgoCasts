// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const holder = [];
  let subArray = [];
  for (let i = 0; i < array.length; i += 1) {
    subArray.push(array[i]);
    if (subArray.length === size) {
      holder.push(subArray);
      subArray = [];
    } else if (subArray.length !== 0 && i === array.length - 1) {
      holder.push(subArray);
    }
  }
  return holder;
}

module.exports = chunk;
