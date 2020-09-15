// function 1
const containsNumbers = function(numbers, aNumber) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === aNumber) {
            return true;
        }
    }
    return false;
}

// function 2
var containsNumberIO = function(numbers, aNumber) {
    if (numbers.indexOf(aNumber) >= 0) {
        return true;
    }

    return false;
}

// function 3
const containsNumberI = function(numbers, aNumber) {
    if (numbers.includes(aNumber)) {
        return true;
    }

    return false;
}

function displayResult() {
    let aNumber = 7;
    let testNumbers = [1,4,2,5,6,7,5,7,2];
    let message;

    if (containsNumberI(testNumbers, aNumber)) {
        message = "Array contains the number " + aNumber;
    } else {
        message = "Array doesnt contain the number " + aNumber;
    }

    document.getElementById("content").innerHTML = message;
}

window.onload = displayResult;

/*
let elements = [1, 4, 2, 5, 6, 7, 5, 7, 2];
let aNumber = 6;

let containsNumbers = function(numbers, aNumber) {
    let isFound = false;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == aNumber) {
            isFound = true;
            break;
        }
    }
    return isFound;
}

console.log(containsNumbers(elements, aNumber));
*/
