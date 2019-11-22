// Reto 4, Mostrar si es número es PAR o IMPAR mediante una función


// Creamos nuestra función

function countToOneHundred() {
  for(var number = 0; number <= 100; number++) {
    if ( number % 2 === 0) {
      console.log(`El número ${number} es par`)
    } else {
      console.log(`El número ${number} es impar`)
    }
  }
}

// Ejecutamos nuestra función

countToOneHundred();

