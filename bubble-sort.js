const arrayNum = [1,5,5,2,6,8,4,20,34,50,70,75,30,11]

function bubbleSort(arraySort){
  for (let i = 0; i < arraySort.length; i++){
   for (let j = 0; j < arraySort.length; j++){
    if (arraySort[j] > arraySort[j + 1]){
      let temp = arraySort[j]
      arraySort[j] = arraySort[j + 1];
      arraySort[j + 1] = temp
    }
   }
  }
  
  return arraySort;
}

console.log(bubbleSort(arrayNum))
