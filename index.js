/*
 * Sorting and searching in JavaScript
 *
 * Sorting things in a programming language is a common problem, and while most programming languages
 * have some way by which to sort complex data types, ultimately, the native implementation has to pick
 * one of the available algorithms which may not always be the right choice.
 *
 * Case in point the .sort() method on the Array object in JavaScript, the JavaScript spec does not
 * state what algorithm must be used, leading vendors to use whatever algorithm they want.
 *
 * Google, for example, uses an algorithm called "insertion sort" which is a good general purpose
 * sorting algorithm but becomes slower the more elements there are, Mozilla and Apple use the 
 * "merge sort" algorithm, however other algorithms exist and it might be that for performance
 * reasons a different algorithm may need to be used. 
 *
 * And so, because you might encounter situations where sorting takes too long you might want to
 * know some different algorithms and how to implement them.
 *
 * The 4 that will be looked at are as follows:
 *
 * 	* Bubble sort: https://en.wikipedia.org/wiki/Bubble_sort
 * 	* Insertion sort: https://en.wikipedia.org/wiki/Insertion_sort
 * 	* Merge sort: https://en.wikipedia.org/wiki/Merge_sort
 * 	* Quick sort: https://en.wikipedia.org/wiki/Quicksort
 *
 * The functions will be empty with a psudocode description for you to implement.
 *
 * It is common for psudocode to be provided for algorithms as the way languages work
 * may mean certain implementations of the algorithm may not work (for instance
 * the Lisp language scheme could use recursion in the algorithms where python could not).
 *
 * For example "loop over array as i" this could be a for loop, a while loop, a recursive 
 * function call, with no specific idea of what looping construct is to be used, it is
 * left to the programmer to interpret that as they will.
*/

// lets start with some utility functions

// This will generate a randomly sorted array of a given length
const getShuffledArray = (length) => Array.from(Array(length).keys()).sort(() => Math.random() - 0.5);

// This will swap two elements in an array, this works because arrays are passed by reference in JavaScript
const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];

/* Bubble sort: this is a very inefficient sort and is included here as an example of how NOT to so sorting */
const bubbleSort = (array) => {
    /* 
     * swapped := false
     *
     * loop with i := item for item in array
     *     loop with j := item for item in array
     *         when array[j] > array[j+1]
     *             swap array[j] and array[j+1] 
     *             swapped := true
     *         end when
     *     end loop
     * end loop
     *
     * return array
    */
}

console.log(`Bubble Sort: ${bubbleSort(getShuffledArray(100))}\n`);

/* Insert Sort */
const insertSort = (array) => {
    /*
     * i := 1
     * loop until i >= array.length
     *     j := i
     *
     *     loop until either j <= 0 array[j-1] or <= array[j]
     *         swap array[j] and array[j-1]
     *         j := j - 1
     *     end loop
     *
     *     i := i + 1
     * end loop
     *
     * return array
    */
}

console.log(`Insert Sort: ${insertSort(getShuffledArray(100))}\n`);

/* Quicksort, a divide and conquor sort 
 * it requires a second function "partition" that
 * splits the array.
*/
const partition = (array, low, high) => {
    /*
     * pivot := array[high]
     * i := low
     *
     * loop with j := low; each time increment j by 1
     *     when array[j] <= pivot
     *         swap array[i] and array[j]
     *         i := i + 1
     *     end when
     * end loop
     *
     * swap array[i] and array[high]
     *
     * return i 
    */
};

const quickSort = (array, start, end) => {
    /*
     * when start >= end
     *     return array
     * end when
     *
     * index := partition(array, start, end)
     * quickSort(array, start, index - 1);
     * quickSort(array, index + 1, end);
     * return array
    */
}

let array = getShuffledArray(100);
console.log(`Quick Sort: ${quickSort(array, 0, array.length-1)}\n`);

/* mergeSort, another divide and conquor sort 
 * it requires a second function "merge" that
 * merges two sorted lists together
*/

const merge = (left, right) => {
    /*
     * array := []
     *
     * loop until left.length === 0 or right.length === 0
     *     if left[0] < right[0]
     *         push left.shift() into array
     *     else
     *         push right.shift() into array
     *     end if
     * end loop
     *
     * return [...array, ...left, ...right]
    */
}

const mergeSort = (array) => {
    /*
     * pivot := array.length / 2
     *
     * when array.length < 2
     *     return array 
     * end when
     *
     * leftArray := array.splice(0, pivot)
     * return merge(mergeSort(leftArray), mergeSort(array))
    */
}

console.log(`Merge Sort: ${mergeSort(getShuffledArray(100))}\n`);

// So a number of searching algorithms were developed to efficently search

array = getShuffledArray(100);
const sortedArray = quickSort(array, 0, array.length-1);
const randomNum = parseInt(Math.random() * 100);
console.log(`Looking for: ${randomNum}`);

/* A simple loop, an inefficient search */
for (let item of sortedArray) {
    if (item === randomNum) {
        console.log(`\tFor Loop -> Matched: ${randomNum}`);
        break;
    }
}

/* Binary search, a divide and conquor search */
const binarySearch = (array, x, start, end) => {
    /*
     * when start > end
     *     return false
     * end when
     *
     * pivot := int (start+end) / 2
     *
     * when array[pivot] === x
     *     return x
     * end when
     *
     * when array[pivot] > x
     *     return binarySearch(array, x, start, pivot - 1)
     * end when
     *
     * return binarySearch(array, x, pivot + 1, end)
    */
}

console.log(`\tBinary Search -> Matched: ${binarySearch(sortedArray, randomNum, 0, sortedArray.length - 1)}`);
