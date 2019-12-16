const express = require('express');
const cors = require('cors');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(req.url);
    next();
});
app.use(favicon(__dirname + '/assets/images/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/sortingOrder', cors() ,(req, res) => {
    let requestBody = req.body;
    res.json(JSON.stringify(requestBody));
});

app.post('/shuffle', cors() ,(req, res) => {
    let size = req.body.size;
    let randomArray         = generateRandomArray(size);
    let reversedArray       = generateReverseArray(size);
    let clusteredArray      = generateClusteredArray(size);
    let almost_sortedArray  = generateAlmostSortedArray(size);
    let few_uniqueArray     = generateFewUniqueArray(size);
    res.json(JSON.stringify({
        "randomArray": randomArray,
        "reversedArray": reversedArray,
        "clusteredArray": clusteredArray,
        "almost_sortedArray": almost_sortedArray,
        "few_uniqueArray": few_uniqueArray
    }));
});

app.post('/doSort', cors(), (req, res) => {
    let functionType = req.body.functionType;
    let arrays = req.body.arrays;
    let result = {};
    for(let array of Object.keys(arrays)) {
        result[array] = eval(functionType + "(" + [...arrays[array]] + ");");
    }
    res.json(JSON.stringify({
        functionType: functionType,
        arrays: arrays,
        result: result
    }))
});

app.use(express.static(__dirname));

app.listen(port, (err) => {
   if(err) {
       return console.log("Error occured ", err);
   }
   console.log(`${port} port is listening`)
});

/* Generating arrays */

function generateRandomArray(size) {
    const array = [];
    let rnd;

    while (array.length < size) {
        rnd = Math.floor(Math.random() * size) + 1;
        if (array.indexOf(rnd) === -1) array.push(rnd);
    }

    return array;
}

function generateStandartArray(size) {
    let arr = [];
    for (let i = 1; i <= size; i++) arr.push(i);

    return arr;
}

function generateReverseArray(size) {
    let arr = [];
    for (let i = size; i > 0; i--) arr.push(i);

    return arr;
}

function generateClusteredArray(size) {
    const cluster = size / 10;
    let tmp = generateRandomArray(size / cluster);
    let res = [];

    for (let i = 0; i < tmp.length; i++) {
        for (let j = (tmp[i] * cluster); j < ((tmp[i] * cluster) + cluster); j++) {
            res.push(j - (cluster - 1));
        }
    }

    return res;
}

function generateAlmostSortedArray(size) {
    const arr = generateStandartArray(size);
    arr[0] = size;
    arr[size - 1] = 1;

    return arr;
}

function generateFewUniqueArray(size) {
    const array = [];

    while (array.length < size) {
        array.push( Math.floor(Math.random() * size) + 1 );
    }

    return array;
}

/* Sorting functions*/

function bubbleSort(...inputArr) {
    const arrCopy = inputArr.concat([]);
    const finalArr = [];
    let counter = 0;
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
        finalArr[counter] = [...arrCopy];
        counter++;
    } while (swapped);

    return finalArr;
}

function shakerSort(...inputArr) {
    const arrCopy = inputArr.concat([]);
    const finalArr = [];
    let counter = 0;
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
        finalArr[counter] = [...arrCopy];
        counter++;
    }

    return finalArr;
}

function quickSort(...inputArr) {
    const finalArr = [];
    let counter = 0;
    function swap(items, leftIndex, rightIndex) {
        let temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;

        finalArr[counter] = [...items];
        counter++;
    }

    function partition(items, left, right) {
        let pivot = items[Math.floor((right + left) / 2)], //middle element
            i = left, //left pointer
            j = right; //right pointer
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
        let index;
        if (items.length > 1) {
            index = partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSortFunc(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSortFunc(items, index, right);
            }
        }
    };
// first call to quick sort
    let arrCopy = inputArr.concat([]);
    quickSortFunc(arrCopy, 0, inputArr.length - 1);
    return finalArr;
}

function combSort(...inputArr) {
    const finalArr = [];
    let counter = 0;
    function is_array_sorted(arr) {
        let sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                sorted = false;
                break;
            }
        }
        return sorted;
    }

    let arrCopy = inputArr.concat([]);
    let iteration_count = 0;
    let gap = arrCopy.length - 2;
    let decrease_factor = 1.25;

    // Repeat iterations Until array is not sorted

    while (!is_array_sorted(arrCopy)) {
        // If not first gap  Calculate gap
        if (iteration_count > 0)
            gap = (gap === 1) ? gap : Math.floor(gap / decrease_factor);

        // Set front and back elements and increment to a gap
        let front = 0;
        let back = gap;
        while (back <= arrCopy.length - 1) {
            // Swap the elements if they are not ordered

            if (arrCopy[front] > arrCopy[back]) {
                let temp = arrCopy[front];
                arrCopy[front] = arrCopy[back];
                arrCopy[back] = temp;
            }

            // Increment and re-run swapping

            front += 1;
            back += 1;
        }
        iteration_count += 1;
        finalArr[counter] = [...arrCopy];
        counter++;
    }

    return finalArr;
}

function selectionSort(...inputArray) {
    const finalArr = [];
    let counter = 0;
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
        finalArr[counter] = [...arr];
        counter++;
    }

    return finalArr;
}

function insertionSort(...inputArray) {
    const finalArr = [];
    let counter = 0;
    let arr = inputArray.concat([]);
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let el = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > el; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = el;
        finalArr[counter] = [...arr];
        counter++;
    }

    return finalArr;
}

function shellSort(...inputArray) {
    const finalArr = [];
    let counter = 0;
    let arr = inputArray.concat([]);
    let increment = arr.length / 2;
    while(increment >= 1) {
        for(let startIndex = 0; startIndex < increment; startIndex++) {
            for(let i = startIndex; i < increment; i++) {
                let sortedListLastIndex = i;
                for(let j = i + increment; j < arr.length; j += increment){
                    const current = arr[j];
                    let currentIndex = j;
                    let swapIndex = sortedListLastIndex;
                    while(current < arr[swapIndex] && swapIndex >= 0) {
                        swap(arr, currentIndex, swapIndex);
                        currentIndex -= increment;
                        swapIndex -= increment;
                        finalArr[counter] = [...arr];
                        counter++;
                    }
                    sortedListLastIndex += increment;
                }
            }
        }
        increment = Math.floor(increment / 2);
    }

    return finalArr;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function mergeSort(...inputArray) {
    const finalArr = [];
    let counter = 0;
    function merge(left, right) {
        let result = [];
        let il = 0;
        let ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        //merge what is left
        let tmp_res = result.concat(left.slice(il)).concat(right.slice(ir));
        finalArr[counter] = [...tmp_res];
        counter++;
        return tmp_res;
    }

    function merge_sort(items) {
        //well it is only 1 element
        if (items.length < 2) {
            return items;
        }
        let middle = Math.floor(items.length / 2);
        //create two arrays
        let left = items.slice(0, middle);
        let right = items.slice(middle);
        return merge(merge_sort(left), merge_sort(right));
    }

    const arrayCopy = inputArray.concat([]);
    merge_sort(arrayCopy);
    return finalArr;
}

//todo: fix merge sort rendering
