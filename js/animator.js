const shuffleButton = document.getElementById("shuffle");
const arrayControlButtons = document.getElementById("array-size").getElementsByClassName("btn-group")[0].getElementsByClassName("btn");
const playAll = document.getElementById("play-all");
const playable = document.getElementsByClassName("playable");
const playArrays = [...playable].filter( word => word.classList.contains("play-array") );
const playAlgorithms = [...playable].filter( word => word.classList.contains("play-algorithm") );
const sorter = new Sorter(10);

/* Functions */

function clearActives() {
    for(let button in arrayControlButtons) {
        if (arrayControlButtons.hasOwnProperty(button)) {
            if(arrayControlButtons[button].classList.contains("active")) arrayControlButtons[button].classList.remove("active");
        }
    }
}

function showArrays() {
    console.log(`    randomArray: ${sorter.randomArray}
    reversedArray: ${sorter.reversedArray}
    clusteredArray: ${sorter.clusteredArray}
    almost_sortedArray: ${sorter.almost_sortedArray}
    few_uniqueArray: ${sorter.few_uniqueArray}
    `);
}

/* Event listeners */

shuffleButton.addEventListener("click", () => {
    let size = 10;
    for(let button in arrayControlButtons) {
        if (arrayControlButtons.hasOwnProperty(button)) {
            if(arrayControlButtons[button].classList.contains("active")) {
                size = arrayControlButtons[button].dataset.size;
            }
        }
    }
    sorter.shuffle(size);
});

for(let button in arrayControlButtons) {
    if (arrayControlButtons.hasOwnProperty(button)) {
        arrayControlButtons[button].addEventListener("click", () => {
            clearActives();
            arrayControlButtons[button].classList.add("active");
            let size = arrayControlButtons[button].dataset.size;
            sorter.shuffle(size);
        })
    }
}

playAll.addEventListener("click", () => {
    sorter.playAll();
});

for(let button in playArrays) {
    if(playArrays.hasOwnProperty(button)) {
        let functionType = playArrays[button].dataset.function;
        playArrays[button].addEventListener("click", () => {
            sorter.playArray(functionType);
        })
    }
}

for(let button in playAlgorithms) {
    if(playAlgorithms.hasOwnProperty(button)) {
        let functionType = playAlgorithms[button].dataset.function;
        playAlgorithms[button].addEventListener("click", () => {
            sorter.playAlgorithm(functionType);
        })
    }
}

//todo: add pop-up event listeners
