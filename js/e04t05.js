const initialize = () => {
    
    document.getElementById('blueButton').addEventListener('click', changeToBlue);
    document.getElementById('greyButton').addEventListener('click', changeToGrey);
    document.getElementById('resetButton').addEventListener('click', resetBackgroundColor);

    function changeToBlue() {
        document.body.style.backgroundColor = "blue";
    }

    function changeToGrey() {
        document.body.style.backgroundColor = "grey";
    }

    function resetBackgroundColor() {
        document.body.style.backgroundColor = "";
    }

}

window.addEventListener('load', () => {
    initialize();
});
