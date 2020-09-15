// Nuolifunktio

// Operaatio vielä kesken, ei osaa esim. käsitellä arvoa 3.4 oikein.
// Pyöristä täysiin minuutteihin. 
const convertToMinutesFormat = (hoursInHundredths) => {
    let separatedHoursAndMinutes;
    
    if (hoursInHundredths.includes(",")) {
        separatedHoursAndMinutes = hoursInHundredths.split(",");
    } else if (hoursInHundredths.includes(".")) {
        separatedHoursAndMinutes = hoursInHundredths.split(".");
    }

    let minutes = separatedHoursAndMinutes[1] * (60 / 100);

    return separatedHoursAndMinutes[0] + ":" + minutes;

};

function displayResult() {
    let aTime = "3.4";
    document.getElementById("content").innerHTML = convertToMinutesFormat(aTime);
}

window.onload = displayResult;
