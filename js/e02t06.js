let measurements = [{batcid: 434, unit: "ounce", weight: 23.11}, 
{batchid: 434, unit: "gram", weight: 122.54}, {batchid: 522, unit: "ounce", weight: 5.88}];

measurements = convertOuncesToGrams(measurements);

for (let j = 0; j < measurements.length; j++) {
    measurements[j]["weight"] = (measurements[j]["weight"]).toFixed(2);
}

document.getElementById("content").innerHTML = JSON.stringify(measurements, null, 4);

function convertOuncesToGrams(measurements) {
    for (let i = 0; i < measurements.length; i++) {
        if (measurements[i]["unit"] == "ounce") {
            measurements[i]["weight"] *= 28.34952;
            measurements[i]["unit"] == "gram";
        }
    }
    return measurements;
}

