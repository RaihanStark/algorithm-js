function binarySearch(array, itemToSearch) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === itemToSearch) return index;
  }

  // If not found
  return -1;
}

module.exports = binarySearch;
