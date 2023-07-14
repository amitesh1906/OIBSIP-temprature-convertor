function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var resultDiv = document.getElementById("result");

    if (inputUnit === "celsius") {
        var fahrenheit = (inputTemp * 9 / 5) + 32;
        var kelvin = parseFloat(inputTemp) + 273.15;
        resultDiv.innerHTML = inputTemp + "°C is equal to " + fahrenheit.toFixed(2) + "°F and " + kelvin.toFixed(2) + "K.";
    } else if (inputUnit === "fahrenheit") {
        var celsius = (inputTemp - 32) * 5 / 9;
        var kelvin = (inputTemp - 32) * 5 / 9 + 273.15;
        resultDiv.innerHTML = inputTemp + "°F is equal to " + celsius.toFixed(2) + "°C and " + kelvin.toFixed(2) + "K.";
    } else if (inputUnit === "kelvin") {
        var celsius = inputTemp - 273.15;
        var fahrenheit = (inputTemp - 273.15) * 9 / 5 + 32;
        resultDiv.innerHTML = inputTemp + "K is equal to " + celsius.toFixed(2) + "°C and " + fahrenheit.toFixed(2) + "°F.";
    }
}
