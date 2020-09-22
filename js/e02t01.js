function displayResult() {
    let year = document.getElementById("inputYear").value;
    if (isLeapYear(year)) {
        document.getElementById("content").innerHTML = "Year " + 
        year + " is a leap year";
    } else if (isLeapYear(year) == false) {
        document.getElementById("content").innerHTML = "Year " + 
        year + " is not a leap year" ;
    } else console.log("something went wrong");
}

function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}
