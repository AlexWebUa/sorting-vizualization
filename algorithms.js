console.log('I M HERE');

function generateRandomArray(array, size, log) {
    let repeats = 0, rnd;

    while (array.length < size) {
        rnd = Math.floor(Math.random() * size) + 1;
        array.indexOf(rnd) === -1 ? array.push(rnd) : repeats++;
    }
    if(log) console.log(`%c During random array generation ${repeats} repeats were encountered`, "font-size: 20px; font-weight: 600;");
    return array;
}

const mainArray = generateRandomArray([], 10, true);
console.log('MAIN ARRAY\n', mainArray);

var merge_sort = function(array){

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
    return merge_sort(array);
};

console.log('MERGE SORT\n', merge_sort(mainArray));


//======================================================================

let selectionSort = (arr) => {
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

const insertionSort = arr => {
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
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};

console.log('BUBBLE SORT\n', bubbleSort(mainArray));
