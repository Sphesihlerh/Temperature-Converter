function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var resultDisplay = document.getElementById("result");
    
    if (isNaN(temperatureInput)) {
      resultDisplay.textContent = "Please enter a valid number!";
      return;
    }
  
    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;
    var unit;
    
    if (unitSelect === "celsius") {
      convertedTemperature = temperature;
      unit = "Celsius";
      var fahrenheit = (temperature * 9/5) + 32;
      var kelvin = temperature + 273.15;
      resultDisplay.textContent = "Converted temperature: " + convertedTemperature.toFixed(2) + " " + unit + ", " + fahrenheit.toFixed(2) + " Fahrenheit, " + kelvin.toFixed(2) + " Kelvin";
    } else if (unitSelect === "fahrenheit") {
      var celsius = (temperature - 32) * (5/9);
      convertedTemperature = celsius;
      unit = "Celsius";
      var kelvin = celsius + 273.15;
      resultDisplay.textContent = "Converted temperature: " + convertedTemperature.toFixed(2) + " " + unit + ", " + temperature.toFixed(2) + " Fahrenheit, " + kelvin.toFixed(2) + " Kelvin";
    } else if (unitSelect === "kelvin") {
      var celsius = temperature - 273.15;
      convertedTemperature = celsius;
      unit = "Celsius";
      var fahrenheit = (celsius * 9/5) + 32;
      resultDisplay.textContent = "Converted temperature: " + convertedTemperature.toFixed(2) + " " + unit + ", " + fahrenheit.toFixed(2) + " Fahrenheit, " + temperature.toFixed(2) + " Kelvin";
    }
  }
  