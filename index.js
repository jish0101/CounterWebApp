// Increment Function

let countVar = 0;

function increment() {
    countVar = countVar + 1;
    document.getElementById("count").innerText = countVar;
}

// Decrement Function

function decrement() {
    if (countVar > 0) {

        countVar = countVar - 1;
        document.getElementById("count").innerText = countVar;
    }
}

// Reset Function

function reset() {
    document.getElementById("count").innerText = 0;
    countVar = 0;
    document.getElementById("note").textContent = "";
}

// Note Function

function note() {
    document.getElementById("note").textContent += document.getElementById("count").textContent + " - ";
}