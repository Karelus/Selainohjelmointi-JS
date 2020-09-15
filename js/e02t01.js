function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}

function displayResult() {
    let year = 2019;
    document.getElementById("content").innerHTML = isLeapYear(year);
}

window.onload = displayResult;