function add() {
    var firstNumber = document.getElementById("firstnumber").value;
    var secondNumber = document.getElementById("secondnumber").value;
    var result = parseFloat(firstNumber) + parseFloat(secondNumber);
    displayResult(result);
  }
  
  function subtract() {
    var firstNumber = document.getElementById("firstnumber").value;
    var secondNumber = document.getElementById("secondnumber").value;
    var result = parseFloat(firstNumber) - parseFloat(secondNumber);
    displayResult(result);
  }
  
  function multiply() {
    var firstNumber = document.getElementById("firstnumber").value;
    var secondNumber = document.getElementById("secondnumber").value;
    var result = parseFloat(firstNumber) * parseFloat(secondNumber);
    displayResult(result);
  }
  
  function divide() {
    var firstNumber = document.getElementById("firstnumber").value;
    var secondNumber = document.getElementById("secondnumber").value;
    var result = parseFloat(firstNumber) / parseFloat(secondNumber);
    displayResult(result);
  }
  
  function displayResult(result) {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "And the result is: " + result;
    resultElement.style.display = "block";
  }
  