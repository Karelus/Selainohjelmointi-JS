let theLetters = "ABC";
let theDigits = 332;

function buildRegisterNumber(theLetters, theDigits) {
    
    try {
        if (checkLetters(theLetters)) {
            throw new Error('Invalid register number letters');
        }
        if (checkNumbers(theNumbers)) {
            throw new Error('Invalid register number digits');
        }

        return true;

    } catch (error) {
        console.error(error.name + ' : ' + error.message);
        return error.name;
    }

}

function checkLetters(theLetters) {
    if (typeof theLetters == "string") {
        return true;
    }
    return false;
}

function checkNumbers(theNumbers) {
    if (typeof theNumbers == "number") {
        return true;
    }
    return false;
}

function checkLicence(theLetters, theDigits) {

}