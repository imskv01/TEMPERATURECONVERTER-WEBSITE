function convertToCelsius() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    if (!fahrenheit) {
      alert('Please enter a temperature in Fahrenheit.');
      return;
    }
  
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('result').textContent = `Celsius: ${celsius.toFixed(2)}`;
  }
  