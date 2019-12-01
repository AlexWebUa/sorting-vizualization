console.log('I M HERE');

const enums = require('./enums');
const {SortTypes} = enums;
const {ArrTypes} = enums;
// =======================================================================

function mainSortingFunc(options) {
    console.log('options', options);
    return generateRandomArray(options.arrLength);
}
const req = {
    arrLength: 10,
    // sortType: SortTypes,
    // arrType: ArrTypes
}

// ==================== TEST REQUEST =====================
fetch('http://localhost:3000/sortingOrder', {
    method : 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(req)
}).then((res) => res.json())
    .then((res) => console.log('MY RESULT FROM SERVER', res))
    .catch((er) => console.log(er));

//===========================================================
function generateRandomArray(size) {
    const array = [];
    let repeats = 0, rnd;

    while (array.length < size) {
        rnd = Math.floor(Math.random() * size) + 1;
        array.indexOf(rnd) === -1 ? array.push(rnd) : repeats++;
    }
    return array;
}
function generateStandartArray(size){
    let arr = [];
    for(let i = 1; i <= size; i++){
        arr.push(i);
    }
    return arr;
}

const generateReverseArray = (size) => generateStandartArray(size).reverse();

function generateAlmostSortedArray(size){
    const arr = generateStandartArray(size);
    arr[0] = size;
    arr[size-1] = 1;
    return arr;
}

function generateClusteredArray(size){
    const arr = generateStandartArray(10);
    const res = [];
    for(let i = 1; i <= size / 10; i++){
        res.concat(arr);
    }
    return res;
}

const mainArray = generateRandomArray(10);
console.log('MAIN ARRAY\n', mainArray);

let mergeSort = function(inputArray){

    function merge(left, right){
        var result = [];
        var il = 0;
        var ir = 0;
        while (il < left.length && ir < right.length){
            if (left[il] < right[ir]){
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        //merge what is left
        return result.concat(left.slice(il)).concat(right.slice(ir));
    }
    function merge_sort(items){
        //well it is only 1 element
        if (items.length < 2){
            return items;
        }
        var middle = Math.floor(items.length / 2);
        //create two arrays
        var left = items.slice(0, middle);
        var right = items.slice(middle);
        return merge(merge_sort(left), merge_sort(right));
    }
    const arrayCopy = inputArray.concat([]);
    return merge_sort(arrayCopy);
};

console.log('MERGE SORT\n', mergeSort(mainArray));


//======================================================================

let selectionSort = (inputArray) => {
    let arr = inputArray.concat([]);
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

console.log('SELECTION SORT\n', selectionSort(mainArray));

//======================================================================

const insertionSort = function(inputArray) {
    let arr = inputArray.concat([]);
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let el = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > el; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = el;
    }
    return arr;
};

console.log('INSERTION SORT\n', insertionSort(mainArray));

//=================================================

let bubbleSort = (inputArr) => {
    const arrCopy = inputArr.concat([]);
    let len = arrCopy.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (arrCopy[i] > arrCopy[i + 1]) {
                let tmp = arrCopy[i];
                arrCopy[i] = arrCopy[i + 1];
                arrCopy[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return arrCopy;
};

console.log('BUBBLE SORT\n', bubbleSort(mainArray));

//=======================================================================

let shakerSort = function(inputArr) {
    const arrCopy = inputArr.concat([]);
    let is_Sorted = true;
    while (is_Sorted) {
        for (let i = 0; i < arrCopy.length - 1; i++) {
            if (arrCopy[i] > arrCopy[i + 1]) {
                let temp = arrCopy[i];
                arrCopy[i] = arrCopy[i + 1];
                arrCopy[i + 1] = temp;
                is_Sorted = true;
            }
        }

        if (!is_Sorted)
            break;

        is_Sorted = false;

        for (let j = arrCopy.length - 1; j > 0; j--) {
            if (arrCopy[j - 1] > arrCopy[j]) {
                let temp = arrCopy[j];
                arrCopy[j] = arrCopy[j - 1];
                arrCopy[j - 1] = temp;
                is_Sorted = true;
            }
        }
    }
};
console.log('SHAKER SORT\n', shakerSort(mainArray));

//================================================================

const quickSort = function(inputArr) {
    function swap(items, leftIndex, rightIndex){
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }
    function partition(items, left, right) {
        var pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    let quickSortFunc = (items, left, right) => {
        var index;
        if (items.length > 1) {
            index = partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSortFunc(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSortFunc(items, index, right);
            }
        }
        return items;
    }
// first call to quick sort
    let arrCopy = inputArr.concat([]);
    let sortedArray = quickSortFunc(arrCopy, 0, inputArr.length - 1);
    return sortedArray;
}

console.log('QUICK SORT\n', quickSort(mainArray));


//==========================================

let combSort = function(inputArr) {
    function is_array_sorted (arr) {
        var sorted = true;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                sorted = false;
                break;
            }
        }
        return sorted;
    }

    let arrCopy = inputArr.concat([]);
    var iteration_count = 0;
    var gap = arrCopy.length - 2;
    var decrease_factor = 1.25;

    // Repeat iterations Until array is not sorted

    while (!is_array_sorted(arrCopy))
    {
        // If not first gap  Calculate gap
        if (iteration_count > 0)
            gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);

        // Set front and back elements and increment to a gap
        var front = 0;
        var back = gap;
        while (back <= arrCopy.length - 1)
        {
            // Swap the elements if they are not ordered

            if (arrCopy[front] > arrCopy[back])
            {
                var temp = arrCopy[front];
                arrCopy[front] = arrCopy[back];
                arrCopy[back] = temp;
            }

            // Increment and re-run swapping

            front += 1;
            back += 1;
        }
        iteration_count += 1;
    }
    return arrCopy;
};

console.log('COMB SORT\n', combSort(mainArray));

let shellSort = function(inputArr){
    function swap(items, leftIndex, rightIndex){
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }
    let array = inputArr.concat([]);
    var length = array.length;
    var h = 1;
    while( h < length / 3){
        h = 3 * h + 1;
    }
    while( h > 0 ){
        for ( var i = h; i < length; i++){
            for ( var j = i; j > 0 && array[j] < array[j-h]; j-=h){
                swap(array, j, j-h);
            }
        }
        //decreasing h
        h = -h / 3
    }
    return array;
};

module.exports.mainSortingFunc = mainSortingFunc;
// console.log('SHELL SORT \n', shellSort(mainArray));