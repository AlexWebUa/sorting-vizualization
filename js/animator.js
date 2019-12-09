const shuffleButton = document.getElementById("shuffle");
const test = document.getElementById("test");
const arrayControlButtons = document.getElementById("control-size").getElementsByClassName("btn-group")[0].getElementsByClassName("btn");

test.addEventListener("click", ev => {
    testAll(20);
});
