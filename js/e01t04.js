for (numb = 1; numb <= 100; numb++) {
    let answer = "";
    if (numb % 3 == 0) answer += "Fizz";
    if (numb % 5 == 0) answer += "Buzz";
    console.log(answer || numb)
}

