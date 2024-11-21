// Part 1.1: Random Quote Box
const quotes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "Success is not final, failure is not fatal.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is 10% what happens to us and 90% how we react to it."
];

function loadRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

function changeColor(color) {
    const quoteBox = document.getElementById("quote-box");
    quoteBox.style.color = color;
    quoteBox.style.borderColor = color;
    quoteBox.style.backgroundColor = color + "20";
}

window.onload = loadRandomQuote;

// Part 1.2: Hero Converter
function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const type = document.getElementById("conversion-type").value;
    let result = 0;

    if (type === "kg-to-lbs") {
        result = value * 2.2046;
    } else if (type === "lbs-to-kg") {
        result = value * 0.4536;
    }

    document.getElementById("result").innerText = `Result: ${result.toFixed(2)}`;
}

// Part 2: Max, Min, Sum, Average, and Reverse Order (Real-time Calculation)
function calculateRealTime() {
    const input = document.getElementById("numbers").value;
    if (input.trim() === "") {
        document.getElementById("results").innerHTML = "";
        return;
    }

    const numbers = input.split(",").map(Number);

    if (numbers.some(isNaN)) {
        document.getElementById("results").innerText = "Please enter valid numbers.";
        return;
    }

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = sum / numbers.length;
    const reversed = numbers.slice().reverse();

    document.getElementById("results").innerHTML = `
        <p>Max: ${max}</p>
        <p>Min: ${min}</p>
        <p>Sum: ${sum}</p>
        <p>Average: ${avg.toFixed(2)}</p>
        <p>Reverse Order: ${reversed.join(", ")}</p>
    `;
}
