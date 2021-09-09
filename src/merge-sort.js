// Combine and sorting array
const merge = (leftArray, rightArray) =>{
    // Temporary Array
    let temp_array = [];

    // Iteration Variable
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        let leftElement = leftArray[leftIndex];
        let rightElement = rightArray[rightIndex];
        if (leftElement < rightElement){
            console.log(`${leftElement} < ${rightElement}`)
            temp_array.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            temp_array.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }
    return [...temp_array,...leftArray.slice(leftIndex) ,...rightArray.slice(rightIndex)];
}

// Divide an array into individual item
const mergeSort = (array) => {
    // Stopping recursion
    if (array.length <= 1) {
        return array;
    }

    // Finding middle
    const middle = Math.ceil((array.length - 1) / 2)

    // Splitting left and right array
    const leftArray = array.slice(0, middle)
    const rightArray = array.slice(middle)

    // Recursion
    return merge(mergeSort(leftArray),mergeSort(rightArray));
}

module.export = mergeSort;