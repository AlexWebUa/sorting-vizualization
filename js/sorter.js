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
        console.log("here will be rendering...");
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
                console.log(d);
                //console.log(`Sorted by ${d.functionType}: \ninitial array: ${d.arrays[0]}\nresult: ${d.result[0]}`);
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
