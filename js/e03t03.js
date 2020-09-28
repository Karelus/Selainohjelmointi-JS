function displayResult() {
    let year = 2012;
    if (tryIsLeapYear(year) == true) {
        document.getElementById("content").innerHTML = "Year " +
            year + " is a leap year";
    } else if (tryIsLeapYear(year) == false) {
        document.getElementById("content").innerHTML = "Year " +
            year + " is not a leap year";
    }
}


function isIntegerNumber(aNumber) {
    if (aNumber === parseInt(aNumber, 10)) {
        return true;
    }
    return false;
}


function tryIsLeapYear(year) {

    try {
        if (year === null || year === undefined || year === '') {
            throw new Error('Argument year was not given.');
        }

        if (!isIntegerNumber(year)) {
            throw new Error('Argument year was not an integer.');
        }

        if (isLeapYear(year)) {
            return true;
        }

        return false;

    } catch (e) {
        console.error(e.name + ' : ' + e.message);
        return e.name;
    }

}


function isLeapYear(year) {

    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }

    return false;

}
