function convertTemperature() {
    const tempInput = parseFloat(document.getElementById("tempInput").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    let convertedTemp;


    if (inputUnit === "Celsius") {
      if (outputUnit === "Fahrenheit") {
        convertedTemp = (tempInput * 9/5) + 32;
      } else if (outputUnit === "Kelvin") {
        convertedTemp = tempInput + 273.15;
      } else {
        convertedTemp = tempInput;
      }
    } else if (inputUnit === "Fahrenheit") {
      if (outputUnit === "Celsius") {
        convertedTemp = (tempInput - 32) * 5/9;
      } else if (outputUnit === "Kelvin") {
        convertedTemp = ((tempInput - 32) * 5/9) + 273.15;
      } else {
        convertedTemp = tempInput;
      }
    } else if (inputUnit === "Kelvin") {
      if (outputUnit === "Celsius") {
        convertedTemp = tempInput - 273.15;
      } else if (outputUnit === "Fahrenheit") {
        convertedTemp = ((tempInput - 273.15) * 9/5) + 32;
      } else {
        convertedTemp = tempInput;
      }
    }

    // Display the result
    document.getElementById("result").innerHTML = `Converted Temperature: ${convertedTemp.toFixed(2)} °${outputUnit.charAt(0)}`;
  }
