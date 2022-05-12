const getShuffledArray = (length) => Array.from(Array(length).keys()).sort(() => Math.random() - 0.5);
const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];

const bubbleSort = (array) => {
    // Make swapped false by default
    let swapped = false;

    for (let i = 0; i < array.length; i++) {
	for(let j = 0; j < array.length; j++) {
	    if (array[j] > array[j+1]) {
		swap(array, j, j + 1);
		swapped = true;
	    }
	}
    }

    return array;
}

const insertSort = (array) => {
    let i = 1;

    while (i < array.length) {
	let j = i;

	while (j > 0 && array[j-1] > array[j]) {
	    swap(array, j, j - 1);
	    j--;
	}

	i++;
    }

    return array;
}

const partition = (array, low, high) => {
    const pivot = array[high];
    let i = low;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
    	    swap(array, i, j);
	    i++;
        }
    }

    swap(array, i, high);

    return i;
};

const quickSort = (array, start, end) => {
    // Base case or terminating case
    if (start >= end) {
        return array;
    }
    
    const index = partition(array, start, end);
    quickSort(array, start, index - 1);
    quickSort(array, index + 1, end);
    return array;
}

const merge = (left, right) => {
    const array = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift())  
        } else {
            array.push(right.shift()) 
        }
    }
    
    return [ ...array, ...left, ...right ]
}

const mergeSort = (array) => {
    const pivot = array.length / 2;

    if (array.length < 2) {
	return array;
    }

    const leftArray = array.splice(0, pivot);
    return merge(mergeSort(leftArray), mergeSort(array));
}

const binarySearch = (array, x, start, end) => {
    if (start > end) {
        return false;
    }
  
    const pivot = Math.floor((start + end) / 2);
  
    if (array[pivot] === x) {
        return x;
    }
         
    if(array[pivot] > x) {
        return binarySearch(array, x, start, pivot - 1);
    }

    return binarySearch(array, x, pivot + 1, end);
}

const array = getShuffledArray(100);
console.log(`Array: ${array}\n`);
console.log(`Bubble Sort: ${bubbleSort([...array])}\n`);
console.log(`Quick Sort: ${quickSort([...array], 0, array.length-1)}\n`);
console.log(`Insert Sort: ${insertSort([...array])}\n`);
console.log(`Merge Sort: ${mergeSort([...array])}\n`);

const sortedArray = quickSort([...array], 0, array.length-1);
const randomNum = parseInt(Math.random() * 100);
console.log(`Looking for: ${randomNum} in ${array}`);

for (let item of sortedArray) {
    if (item === randomNum) {
        console.log(`\tFor Loop -> Matched: ${randomNum}`);
        break;
    }
}

console.log(`\tBinary Search -> Matched: ${binarySearch(sortedArray, randomNum, 0, sortedArray.length - 1)}`);
