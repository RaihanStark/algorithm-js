function selectionSort(arraySort) {
  for (let i = 0; i < arraySort.length; i++) {
    let minimum_value = i;
    for (let j = i + 1; j < arraySort.length; j++) {
      // Finding the minimum value
      // If found minimum number
      if (arraySort[j] < arraySort[minimum_value]) {
        // store temporary number
        minimum_value = j;
      }
    }

    // If minimum value changed
    if (minimum_value != i) {
      let tmp_value = arraySort[i];

      // swap minimum value
      arraySort[i] = arraySort[minimum_value];
      arraySort[minimum_value] = tmp_value;
    }
  }
  return arraySort;
}
module.exports = selectionSort;
