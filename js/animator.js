const shuffleButton = document.getElementById("shuffle");
const test = document.getElementById("test");
const arrayControlButtons = document.getElementById("array-size").getElementsByClassName("btn-group")[0].getElementsByClassName("btn");
const sorter = new Sorter(10);

/* Functions */

function clearActives() {
    for(let button in arrayControlButtons) {
        if (arrayControlButtons.hasOwnProperty(button)) {
            if(arrayControlButtons[button].classList.contains("active")) arrayControlButtons[button].classList.remove("active");
        }
    }
}

/* Event listeners */

document.addEventListener("DOMContentLoaded", () => {
    // console.log("i'm ready");
});

test.addEventListener("click", ev => {
    testAll(20);
});

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
