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

