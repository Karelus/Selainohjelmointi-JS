function displayResult() {
    let aNumber = 0;
    aNumber = parseInt(document.getElementById("inputNumb").value, 10);
    let numbers = [1,4,2,5,6,7,5,7,2];
    let result = containsNumbers(numbers, aNumber);

    if (result) {
        document.getElementById("content").innerHTML = 
        "Array contains the number " + aNumber;
    } else {
        document.getElementById("content").innerHTML = 
        "Array doesn\'t contain the number " + aNumber;
    }
}

// function 1
const containsNumbers = function(numbers, aNumber) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === aNumber) {
            return true;
        }
    }
    return false;
}

/*
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
*/