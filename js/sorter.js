class Sorter{
    constructor(size) {
        this.randomArray         = [];
        this.reversedArray       = [];
        this.clusteredArray      = [];
        this.almost_sortedArray  = [];
        this.few_uniqueArray     = [];
        this.shuffle(size);
    }

    updateArrayStates() {
        let arrays = [this.randomArray, this.reversedArray, this.clusteredArray, this.almost_sortedArray, this.few_uniqueArray];
        for(let i = 0; i < arrays.length; i++) {
            renderCell(arrays[i], bubbleLine[i]);
            renderCell(arrays[i], shakerLine[i]);
            renderCell(arrays[i], quickLine[i]);
            renderCell(arrays[i], combLine[i]);
            renderCell(arrays[i], selectionLine[i]);
            renderCell(arrays[i], insertionLine[i]);
            renderCell(arrays[i], shellLine[i]);
            renderCell(arrays[i], mergeLine[i]);
        }
    }

    shuffle(size) {
        $.ajax(({
            url: "http://localhost:3000/shuffle",
            method: "POST",
            async: false,
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"size": size}),
            success: (data) => {
                let d = JSON.parse(data);
                console.log("%cChanged arrays state!", "color: green; font-size: 24px;");
                for(let key in d) {
                    if(d.hasOwnProperty(key)) {
                        this[`${key}`] = d[key];
                        console.log(`${key}: ${d[key]}`);
                    }
                }
            },
            error: (msg) => {
                console.log("Error from server: ", msg);
            }
        }));
        this.updateArrayStates();
    }

    doSort(functionType, arrays) {
        $.ajax(({
            url: "http://localhost:3000/doSort",
            method: "POST",
            async: false,
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({functionType: functionType, arrays: arrays}),
            success: (data) => {
                let d = JSON.parse(data);
                let speed = 300;
                // HARDCODE!!!
                if(d.result.randomArray.length > 20) speed = 100;
                if (functionType === "bubbleSort") {
                    if(d.result.randomArray) {
                        d.result.randomArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, bubbleLine[0]);
                        } );
                    }
                    if(d.result.reversedArray) {
                        d.result.reversedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, bubbleLine[1]);
                        } );
                    }
                    if(d.result.clusteredArray) {
                        d.result.clusteredArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, bubbleLine[2]);
                        } );
                    }
                    if(d.result.almost_sortedArray) {
                        d.result.almost_sortedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, bubbleLine[3]);
                        } );
                    }
                    if(d.result.few_uniqueArray) {
                        d.result.few_uniqueArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, bubbleLine[4]);
                        } );
                    }
                }
                else if (functionType === "shakerSort") {
                    if(d.result.randomArray) {
                        d.result.randomArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, shakerLine[0]);
                        } );
                    }
                    if(d.result.reversedArray) {
                        d.result.reversedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, shakerLine[1]);
                        } );
                    }
                    if(d.result.clusteredArray) {
                        d.result.clusteredArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, shakerLine[2]);
                        } );
                    }
                    if(d.result.almost_sortedArray) {
                        d.result.almost_sortedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, shakerLine[3]);
                        } );
                    }
                    if(d.result.few_uniqueArray) {
                        d.result.few_uniqueArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, shakerLine[4]);
                        } );
                    }
                }
                else if (functionType === "quickSort") {
                    if(d.result.randomArray) {
                        d.result.randomArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, quickLine[0]);
                        } );
                    }
                    if(d.result.reversedArray) {
                        d.result.reversedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, quickLine[1]);
                        } );
                    }
                    if(d.result.clusteredArray) {
                        d.result.clusteredArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, quickLine[2]);
                        } );
                    }
                    if(d.result.almost_sortedArray) {
                        d.result.almost_sortedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, quickLine[3]);
                        } );
                    }
                    if(d.result.few_uniqueArray) {
                        d.result.few_uniqueArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, quickLine[4]);
                        } );
                    }
                }
                else if (functionType === "combSort") {
                    if(d.result.randomArray) {
                        d.result.randomArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, combLine[0]);
                        } );
                    }
                    if(d.result.reversedArray) {
                        d.result.reversedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, combLine[1]);
                        } );
                    }
                    if(d.result.clusteredArray) {
                        d.result.clusteredArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, combLine[2]);
                        } );
                    }
                    if(d.result.almost_sortedArray) {
                        d.result.almost_sortedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, combLine[3]);
                        } );
                    }
                    if(d.result.few_uniqueArray) {
                        d.result.few_uniqueArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, combLine[4]);
                        } );
                    }
                }
                else if (functionType === "selectionSort") {
                    if(d.result.randomArray) {
                        d.result.randomArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, selectionLine[0]);
                        } );
                    }
                    if(d.result.reversedArray) {
                        d.result.reversedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, selectionLine[1]);
                        } );
                    }
                    if(d.result.clusteredArray) {
                        d.result.clusteredArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, selectionLine[2]);
                        } );
                    }
                    if(d.result.almost_sortedArray) {
                        d.result.almost_sortedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, selectionLine[3]);
                        } );
                    }
                    if(d.result.few_uniqueArray) {
                        d.result.few_uniqueArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, selectionLine[4]);
                        } );
                    }
                }
                else if (functionType === "insertionSort") {
                    if(d.result.randomArray) {
                        d.result.randomArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, insertionLine[0]);
                        } );
                    }
                    if(d.result.reversedArray) {
                        d.result.reversedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, insertionLine[1]);
                        } );
                    }
                    if(d.result.clusteredArray) {
                        d.result.clusteredArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, insertionLine[2]);
                        } );
                    }
                    if(d.result.almost_sortedArray) {
                        d.result.almost_sortedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, insertionLine[3]);
                        } );
                    }
                    if(d.result.few_uniqueArray) {
                        d.result.few_uniqueArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, insertionLine[4]);
                        } );
                    }
                }
                else if (functionType === "shellSort") {
                    if(d.result.randomArray) {
                        d.result.randomArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, shellLine[0]);
                        } );
                    }
                    if(d.result.reversedArray) {
                        d.result.reversedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, shellLine[1]);
                        } );
                    }
                    if(d.result.clusteredArray) {
                        d.result.clusteredArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, shellLine[2]);
                        } );
                    }
                    if(d.result.almost_sortedArray) {
                        d.result.almost_sortedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, shellLine[3]);
                        } );
                    }
                    if(d.result.few_uniqueArray) {
                        d.result.few_uniqueArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, shellLine[4]);
                        } );
                    }
                }
                else if (functionType === "mergeSort") {
                    if(d.result.randomArray) {
                        d.result.randomArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, mergeLine[0]);
                        } );
                    }
                    if(d.result.reversedArray) {
                        d.result.reversedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, mergeLine[1]);
                        } );
                    }
                    if(d.result.clusteredArray) {
                        d.result.clusteredArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, mergeLine[2]);
                        } );
                    }
                    if(d.result.almost_sortedArray) {
                        d.result.almost_sortedArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, mergeLine[3]);
                        } );
                    }
                    if(d.result.few_uniqueArray) {
                        d.result.few_uniqueArray.forEach( (arr, i) => {
                            setTimeout(renderCell, i * speed, arr, mergeLine[4]);
                        } );
                    }
                }
            },
            error: (msg) => {
                console.log("Error from server: ", msg);
            }
        }));
    }

    doAllSorts(...array) {
        this.doSort("bubbleSort", ...array);
        this.doSort("shakerSort", ...array);
        this.doSort("quickSort", ...array);
        this.doSort("combSort", ...array);
        this.doSort("selectionSort", ...array);
        this.doSort("insertionSort", ...array);
        this.doSort("shellSort", ...array);
        this.doSort("mergeSort", ...array);
    }

    playAll() {
        this.doAllSorts({
            randomArray: this.randomArray,
            reversedArray: this.reversedArray,
            clusteredArray: this.clusteredArray,
            almost_sortedArray: this.almost_sortedArray,
            few_uniqueArray: this.few_uniqueArray
        });
    }

    playArray(functionType) {
        let arrayType = functionType.toLowerCase() + "Array";
        let code = "this.doAllSorts({" + arrayType + ": this." + arrayType + "});";
        eval(code);
    }

    playAlgorithm(functionType) {
        let algorithmType = functionType.toLowerCase() + "Sort";
        this.doSort(algorithmType, {
            randomArray: this.randomArray,
            reversedArray: this.reversedArray,
            clusteredArray: this.clusteredArray,
            almost_sortedArray: this.almost_sortedArray,
            few_uniqueArray: this.few_uniqueArray
        });
    }
}

/* Helping stuff */

const cells = document.getElementsByClassName("canvas-cell");
let bubbleLine = [], shakerLine = [], quickLine = [], combLine = [], selectionLine = [], insertionLine = [], shellLine = [], mergeLine = [];

// Dividing cells into lines
for( let i = 0;  i < 40; i++ ) {
    if ( i >= 0 && i <= 4 ) bubbleLine.push(cells[i]);
    if ( i >= 5 && i <= 9 ) shakerLine.push(cells[i]);
    if ( i >= 10 && i <= 14 ) quickLine.push(cells[i]);
    if ( i >= 15 && i <= 19 ) combLine.push(cells[i]);
    if ( i >= 20 && i <= 24 ) selectionLine.push(cells[i]);
    if ( i >= 25 && i <= 29 ) insertionLine.push(cells[i]);
    if ( i >= 30 && i <= 34 ) shellLine.push(cells[i]);
    if ( i >= 35 && i <= 39 ) mergeLine.push(cells[i]);
}

function renderCell(array, cell) {
    let cellWidth = parseInt(cell.offsetWidth) - 10;
    let itemsNumber = array.length;
    let minNumber = Math.min(...array);
    let maxNumber = Math.max(...array);
    let minWidth = "5px";
    let maxWidth = cellWidth - 10;
    let ul = document.createElement("ul");
    for(let i = 0; i < array.length; i++) {
        let li = document.createElement("li");
        li.style.height = "2px";
        if(itemsNumber > 20) {
            li.style.height = "1px";
            li.style.marginBottom = "1px";
        }
        li.setAttribute("data-value", array[i]);
        if (array[i] === minNumber) li.style.width = minWidth;
        else if(array[i] === maxNumber) li.style.width = maxWidth + "px";
        else li.style.width = ((array[i] / maxNumber) * maxWidth) + "px";
        ul.appendChild(li);
    }
    cell.innerHTML = "";
    cell.appendChild(ul);
}
