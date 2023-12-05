function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    if (isNaN(temperatureInput)) {
        displayErrorMessage("Please enter a valid temperature.");
        return;
    }

    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperatureInput * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperatureInput - 32) * 5/9;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperatureInput + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperatureInput - 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (temperatureInput - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (temperatureInput - 273.15) * 9/5 + 32;
    } else {
        result = temperatureInput; // If the units are the same, no conversion needed
    }

    displayResult(`${temperatureInput} ${fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} is equal to ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}.`);
}

function displayResult(message) {
    document.getElementById("result").innerText = message;
    document.getElementById("resultContainer").style.display = "block";
    document.getElementById("errorMessageContainer").style.display = "none";
}

function displayErrorMessage(message) {
    document.getElementById("errorMessage").innerText = message;
    document.getElementById("errorMessageContainer").style.display = "block";
    document.getElementById("resultContainer").style.display = "none";
}