function binarySearch(array, itemToSearch) {
  // Determine Start Middle End
  let start = 0;
  let end = array.length - 1;
  let middle = parseInt(end / 2);

  // While start is not meet the end
  while (start <= end) {
    // Start Searching
    // Best-Case Scenario - Found in the middle.
    if (array[middle] === itemToSearch) return middle;

    // If number bigger than middle
    // Search Right
    if (itemToSearch > array[middle]) start = middle + 1;

    // If number lesser than middle
    // Search left
    if (itemToSearch < array[middle]) end = middle - 1;

    middle = parseInt((start + end) / 2);
  }

  // If not found
  return -1;
}

module.exports = binarySearch;
