document.addEventListener("DOMContentLoaded", function () {
    // Scroll Animation for each section
    const sections = document.querySelectorAll(".section");
    const options = { threshold: 0.2 };
    const links = document.querySelectorAll("#sidebar ul li a");

    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;
        links.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop <= fromTop + 50 &&
                section.offsetTop + section.offsetHeight > fromTop + 50
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Footer Date and Location
    const footerText = document.getElementById("footer-text");
    footerText.innerHTML = `Page location: ${window.location.href} & Last modified: ${document.lastModified}`;
});

document.querySelector('.sidebar-toggle').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('open');
  });
  

  function generateQuote() {
    var quotes = ["Life is a box of chocolates", 
        "Leave one wolf alive & the sheeps are never safe", 
        "Be yourself. Everyone else is already taken", 
        "Two things are infinite: the universe and human stupidity... And I'm not sure about the universe", 
        "Everybody is ignorant, only on different subjects", 
        "Which would be worst? To live as a monster or die as a good man"];
    var length = quotes.length;
    var number = Math.floor(Math.random() * (length - 1 - 0 + 1)) + 0;
    document.getElementById('quote').innerText = quotes[number];
}

function changeStyle(box) {
    var quoteContainer = document.getElementById('quote-container');
    
    if (box === 'box1') {
        quoteContainer.style.color = 'red';
        quoteContainer.style.borderColor = 'red';
        quoteContainer.style.backgroundColor = 'greenyellow';
        quoteContainer.style.fontSize = '14px';
        quoteContainer.style.fontFamily = 'Serif';
        quoteContainer.style.fontWeight = 'bold'; // Bold the letters
    }
    else if (box === 'box2') {
        quoteContainer.style.color = 'black';
        quoteContainer.style.borderColor = 'black';
        quoteContainer.style.backgroundColor = 'orange';
        quoteContainer.style.fontSize = '16px';
        quoteContainer.style.fontFamily = 'Arial';
        quoteContainer.style.fontWeight = 'bold'; // Bold the letters
    }
    else if (box === 'box3') {
        quoteContainer.style.color = 'yellow';
        quoteContainer.style.borderColor = 'yellow';
        quoteContainer.style.backgroundColor = 'skyblue';
        quoteContainer.style.fontSize = '12px';
        quoteContainer.style.fontFamily = 'Lucida Sans';
        quoteContainer.style.fontWeight = 'bold'; // Bold the letters
    }
    else {
        quoteContainer.style.color = 'purple';
        quoteContainer.style.borderColor = 'purple';
        quoteContainer.style.backgroundColor = 'goldenrod';
        quoteContainer.style.fontSize = '18px';
        quoteContainer.style.fontFamily = 'Times New Romans';
        quoteContainer.style.fontWeight = 'bold'; // Bold the letters
    }
}

function convert(conversionType, value) {
    // Convert value to a number
    value = parseFloat(value);
    let result = 0;

    // Perform the conversion based on the conversionType
    if (conversionType === "kg_to_lb") {
        // Kilograms to Pounds conversion
        result = value * 2.20462;
        document.getElementById("result").innerText = result.toFixed(2) + " pounds";
    } else if (conversionType === "lb_to_kg") {
        // Pounds to Kilograms conversion
        result = value * 0.453592;
        document.getElementById("result").innerText = result.toFixed(2) + " kilograms";
    }
}
function calculate() {
    
    let input = document.getElementById("box1").value;

    
    let numbers = input.split(",").map(Number);

    
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    let average = sum / numbers.length;

    
    document.getElementById("max").innerText = max;
    document.getElementById("min").innerText = min;
    document.getElementById("sum").innerText = sum;
    document.getElementById("avg").innerText = average.toFixed(2);

    
    let reverseOrder = numbers.slice().reverse().join(", ");
    document.getElementById("reverse").innerText = reverseOrder;
}


function deleteAll(){
    document.getElementById('text-area').value = '';
}

function capitalize() {
    //  Converts the text to upper/lower case. Button will work as toggle.
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].toUpperCase());
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function sort(){
    // rearranges the lines into sorted alphabetical order
    var text = document.getElementById('text-area').value;
    var lines = text.split('');
    var newLines = [];
    
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].toLowerCase());
        // let newLines = text.split('').sort().join('');
    //     document.getElementById('text-area').value = newLines;
    }
    newLines.sort();
    document.getElementById('text-area').value = newLines.join('');
    // document.getElementById('text-area').value = text.split('').sort().join('');
    
}

function reverse (){
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].split('').reverse().join(''));
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function addNumbers() {
    // Places a number in front of each line, such as "1. " (Ignore previous numbers in front of them.)
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push((i + 1) + '. ' + lines[i]);
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function stripBlank () {
    // removes any empty lines from the text area also remove empty space at beginning and end of each line
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].trim() != '') {
            newLines.push(lines[i].trim());
        }
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function shuffle(){
    // Rearranges the lines into a random order. Js do not have this built in, use Math.random().
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].trim());
    }
    newLines.sort(function () {
        return 0.5 - Math.random();
    }
    );
    document.getElementById('text-area').value = newLines.join('\n');
}