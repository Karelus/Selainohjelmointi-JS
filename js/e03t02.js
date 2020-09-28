function displayResult() {
    let year = 2012;
    console.log(typeof(year));
    if (isLeapYearEHIF(year)) {
        document.getElementById("content").innerHTML = "Year " +
            year + " is a leap year";
    } else if (isLeapYearEHIF(year) == false) {
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

function isLeapYearEHIF(year) {

    try {

        if (year === null || year === undefined || year === '') {
            throw new Error('Missing argument year error.');
        }

        if (!isIntegerNumber(year)) {
            throw new Error('Non-integer argument year error.');
        }

        if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
            return true;
        }

        return false;

    } catch (e) {

        console.error(e.name + ' : ' + e.message);

        return undefined;
    }
}
