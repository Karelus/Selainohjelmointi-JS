// Nuolifunktio
const convertToMinutesFormat = (hoursInHundredths) => {
    let separatedHoursAndMinutes;

    if (hoursInHundredths.includes(",")) {
        separatedHoursAndMinutes = hoursInHundredths.split(",");
    } else if (hoursInHundredths.includes(".")) {
        separatedHoursAndMinutes = hoursInHundredths.split(".");
    }

    let minutes = separatedHoursAndMinutes[1] * (60 / 100);
    // if minutes are single digit add 0 in front of the minutes number
    minutes = String(minutes).padStart(2, '0');

    // if leading zeros in hours, remove them
    if (separatedHoursAndMinutes[0] != 0) {
        separatedHoursAndMinutes[0] = separatedHoursAndMinutes[0].replace(/^0+/, '');
    }

    return separatedHoursAndMinutes[0] + ":" + minutes;

};

function displayResult() {
    let aTime = document.getElementById("userInput").value;
    document.getElementById("content").innerHTML = convertToMinutesFormat(aTime);
}

