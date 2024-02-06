// Function to perform addition
function add(a, b) {
    return a + b;
  }
  
  // Function to perform subtraction
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to perform multiplication
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to perform division
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  // Function to calculate result based on operator
  function calculateResult(num1, operator, num2) {
    switch (operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
      default:
        throw new Error("Invalid operator");
    }
  }
  
  // Function to handle form submission
  document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var operator = document.getElementById('operator').value;
    var num2 = parseFloat(document.getElementById('num2').value);
  
    try {
      // Calculate result
      var result = calculateResult(num1, operator, num2);
      // Display result
      document.getElementById('result').innerText = "Result: " + result;
    } catch (error) {
      // Display error message
      document.getElementById('result').innerText = "Error: " + error.message;
    }
  });
  