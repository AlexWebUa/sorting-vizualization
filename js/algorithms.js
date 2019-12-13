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

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}

function generateStandartArray(size) {
    let arr = [];
    for (let i = 1; i <= size; i++) arr.push(i);

    return arr;
}

const generateReverseArray = (size) => {
    let arr = [];
    for (let i = size; i > 0; i--) arr.push(i);

    return arr;
};

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
    let rnd;

    while (array.length < size) {
        array.push( Math.floor(Math.random() * size) + 1 );
    }

    return array;
}

/* Sorting functions*/

function mergeSort(inputArray) {

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
        return result.concat(left.slice(il)).concat(right.slice(ir));
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

    return merge_sort(arrayCopy);
}

function selectionSort(inputArray) {
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

function insertionSort(inputArray) {
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
}

function bubbleSort(inputArr) {
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
}

function shakerSort(inputArr) {
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

    return arrCopy;
}

function quickSort(inputArr) {
    function swap(items, leftIndex, rightIndex) {
        let temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
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

        return items;
    };
// first call to quick sort
    let arrCopy = inputArr.concat([]);

    return quickSortFunc(arrCopy, 0, inputArr.length - 1);
}

function combSort(inputArr) {
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
    }

    return arrCopy;
}


function shellSort(arr) {
    let increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            let j = i;
            let temp = arr[i];

            while (j >= increment && arr[j - increment] > temp) {
                arr[j] = arr[j - increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        if (increment === 2) {
            increment = 1;
        } else {
            increment = parseInt(increment * 5 / 11);
        }
    }
    return arr;
}

/* Client interacting */

function generateArrays(size) {
    const random = generateRandomArray(size);
    const reversed = generateReverseArray(size);
    const clustered = generateClusteredArray(size);
    const almostSorted = generateAlmostSortedArray(size);
    const fewUnique = generateFewUniqueArray(size);
}

class Sorter{
    constructor(size) {
        this.shuffle(size);
    }

    updateArrayStates() {
        $.ajax(({
            url: "http://localhost:3000/sortingOrder",
            method: "POST",
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({1: this.randomArray, 2: this.revresedArray, 3: this.clusteredArray, 4: this.almostSortedArray, 5: this.fewUniqueArray}),
            success: (data) => {
                let d = JSON.parse(data);
                console.log("%cResponse from server: ", "color: green; font-size: 24px;", d);
                for(let key in d) {
                    console.log(`${ArrTypes[key]}: ${d[key]}`);
                }
            },
            error: (msg) => {
                console.log("Error from server: ", msg);
            }
        }))
    }

    shuffle(size) {
        this.randomArray        = generateRandomArray(size);
        this.revresedArray      = generateReverseArray(size);
        this.clusteredArray     = generateClusteredArray(size);
        this.almostSortedArray  = generateAlmostSortedArray(size);
        this.fewUniqueArray     = generateFewUniqueArray(size);
        this.updateArrayStates();
    }
}

function logAllSorts(array) {
    console.log("Bubble:" + bubbleSort(array));
    console.log("Shaker: " + shakerSort(array));
    console.log("Quick: " + quickSort(array));
    console.log("Comb: " + combSort(array));
    console.log("Selection: " + selectionSort(array));
    console.log("Insertion: " + insertionSort(array));
    console.log("Shell: " + shellSort(array));
    console.log("Merge: " + mergeSort(array));
}


function testAll(size) {
    const random = generateRandomArray(size);
    const reversed = generateReverseArray(size);
    const clustered = generateClusteredArray(size);
    const almostSorted = generateAlmostSortedArray(size);
    const fewUnique = generateFewUniqueArray(size);

    console.log("   Random:");
    logAllSorts(random);
    console.log("   Reversed:");
    logAllSorts(reversed);
    console.log("   Clustered:");
    logAllSorts(clustered);
    console.log("   AlmostSorted:");
    logAllSorts(almostSorted);
    console.log("   FewUnique:");
    logAllSorts(fewUnique);
}

// ==================== TEST REQUEST =====================
/*const req = {
    arrLength: 10,
    sortType: SortTypes,
    arrType: ArrTypes
};*/

/*fetch('http://localhost:3000/sortingOrder', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(req)
}).then((res) => res.json())
    .then((res) => console.log('MY RESULT FROM SERVER', res))
    .catch((er) => console.log(er));*/
