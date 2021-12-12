/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
   
*/

const heapSort = (array) => {
  createMaxHeap(array)
  for (let index = array.length - 1; index > 0; index--) {
    swapPlace(0, index, array)
    heapify(array, 0, index)
  }

  return array;
}

const createMaxHeap = (array) => {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length)
  }

  return array
}

const swapPlace = (index1, index2, array) => {
  let temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp

  return array
}

const heapify = (array, index, heapSize) => {
  const left = 2 * index + 1
  const right = 2 * index + 2

  let maxIndex = index

  if (heapSize > left && array[maxIndex] < array[left]) {
    maxIndex = left
  }

  if (heapSize > right && array[maxIndex] < array[right]) {
    maxIndex = right
  }

  if (maxIndex !== index) {
    swapPlace(index, maxIndex, array)
    heapify(array, maxIndex, heapSize)
  }
}

// unit tests
// do not modify the below code
test("heap sort", function () {
  const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
  heapSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
