let deposits = [12.11, 34.22, 23.95, 19.00, 22.50, 220.00];
let index = 0;
let sum = 0;

while (sum < 100 && index < deposits.length) {
    sum += deposits[index];
    index++;
}

document.getElementById("content").innerHTML = sum;
