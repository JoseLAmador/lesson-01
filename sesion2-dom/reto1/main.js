/**
 * CALCULADORA BÁSICA
 * 
 * 
 * TODO:
 * 
 * Multiplicación, división, usar todos los números
 * 
 * Botón "C", que deje blanca nuestra pantalla (tiene el id="reset")
 */


// Variables

var numberOne;
var numberTwo;
var operation;

// Números 0 - 9, operador Igual "="

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("fout");
var five = document.getElementById("five");
var equal = document.getElementById("equal");

// Operadores Suma, Resta, multiplicación, División

var addition = document.getElementById("addition");
var subtraction = document.getElementById("subtraction");

// Función que calcula el resultado

function currentResult(){
  var res = 0;
  switch(operation){
    case "+":
      res = parseInt(numberOne) + parseInt(numberTwo);
      break;
      case "-": 
        res = parseInt(numberOne) - parseInt(numberTwo);
        break;
      default:
        res = 0;
        break;
  }

  result.innerText = res;
}

// Escuchadores

one.addEventListener("click", function(){
  result.textContent = result.textContent + "1";
})

two.addEventListener("click", function(){
  result.textContent = result.textContent + "2";
})


addition.addEventListener("click", function(){
  numberOne = result.textContent;
  operation = "+";
  result.textContent = "";
})

subtraction.addEventListener("click", function(){
  numberOne = result.textContent;
  operation = "-";
  result.textContent = "";
})


equal.addEventListener("click", function(){
  numberTwo = result.textContent;
  currentResult();
})
