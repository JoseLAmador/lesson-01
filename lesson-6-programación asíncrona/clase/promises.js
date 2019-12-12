// Una pizza no es inmediata

function makePizza(){
  const pizzaPromise = new Promise(function(resolve, reject){

    // Cuando este todo listo, puedes resolver esta promesa
    resolve('Pizza done!');

    // Si algo sale mal, puedes rechazar esta promesa


  });

  return pizzaPromise;
}

const pizza = makePizza();

console.log(pizza);

// PASO 2, Add

// function makePizza(toppings){
//   const pizzaPromise = new Promise(function(resolve, reject){

//     // Cuando este todo listo, puedes resolver esta promesa
//     resolve(`Aquí está tu pizza con los ingredientes ${toppings.join(' ')}`);

//     // Si algo sale mal, puedes rechazar esta promesa


//   });

//   return pizzaPromise;
// }

// const peperoniPromise = makePizza(['peperoni']);
// const peperoniPromisePlus = makePizza(['peperoni', 'cebolla', 'hongos']);

// console.log(peperoniPromise);
// console.log(peperoniPromisePlus);


// // Para acceder a la info: 

// peperoniPromise.then(function(pizza){
//   console.log("Ok ya entendí")
//   console.log(pizza);
// })


// PASO 3: Agregar un segundo de espera y checar que ahora dice pending

// function makePizza(toppings){
//   const pizzaPromise = new Promise(function(resolve, reject){

//     setTimeout(function(){
//       // Cuando este todo listo, puedes resolver esta promesa
//       resolve(`Aquí está tu pizza con los ingredientes ${toppings.join(' ')}`);

//     }, 1000);

    
//     // Si algo sale mal, puedes rechazar esta promesa


//   });

//   return pizzaPromise;
// }

// const peperoniPromise = makePizza(['peperoni']);
// const peperoniPromisePlus = makePizza(['peperoni', 'cebolla', 'hongos']);

// console.log(peperoniPromise);

// // Para acceder a la info: 

// peperoniPromise.then(function(pizza){
//   console.log("Ok ya entendí")
//   console.log(pizza);
// })

// PASO 4, Crear multiples pizzas una despues  de otra

// function makePizza(toppings){
//   const pizzaPromise = new Promise(function(resolve, reject){

//     setTimeout(function(){
//       // Cuando este todo listo, puedes resolver esta promesa
//       resolve(`Aquí está tu pizza con los ingredientes ${toppings.join(' ')}`);

//     }, 1000);

    
//     // Si algo sale mal, puedes rechazar esta promesa


//   });

//   return pizzaPromise;
// }

// makePizza(['peperoni'])
// .then(function(pizza){
//   console.log(pizza)

//   return makePizza(['piña', 'queso'])
// })
// .then(function(pizza){
//   console.log(pizza);

//   return makePizza(['cebolla', 'queso'])
// })
// .then(function(pizza){
//   console.log(pizza)
// })

// PASO 5, Agregar toppings por default y cambiar tiempo de coccion

// function makePizza(toppings){
//   const pizzaPromise = new Promise(function(resolve, reject){

//     const tiempoHorneado = 500 + (toppings.length * 200);

//     setTimeout(function(){
//       // Cuando este todo listo, puedes resolver esta promesa
//       resolve(`Aquí está tu pizza con los ingredientes ${toppings.join(' ')}`);

//     }, tiempoHorneado);

    
//     // Si algo sale mal, puedes rechazar esta promesa


//   });

//   return pizzaPromise;
// }

// makePizza(['peperoni'])
// .then(function(pizza){
//   console.log(pizza)

//   return makePizza(['piña', 'queso'])
// })
// .then(function(pizza){
//   console.log(pizza);

//   return makePizza(['cebolla', 'queso', 'peperoni'])
// })
// .then(function(pizza){
//   console.log(pizza);

//   return makePizza(['cebolla', 'queso', 'peperoni', 'aguacate', 'piña', 'cebolla'])
// })
// .then(function(pizza){
//   console.log(pizza)
// })

//PASO 6 Mega Promesa

function makePizza(toppings){
  const pizzaPromise = new Promise(function(resolve, reject){

    const tiempoHorneado = 500 + (toppings.length * 200);

    setTimeout(function(){
      // Cuando este todo listo, puedes resolver esta promesa
      resolve(`Aquí está tu pizza con los ingredientes ${toppings.join(' ')}`);

    }, tiempoHorneado);

    
    // Si algo sale mal, puedes rechazar esta promesa


  });

  return pizzaPromise;
}


const pizzaPromise1= makePizza(['piña', 'queso']);
const pizzaPromise2= makePizza(['cebolla', 'queso', 'peperoni'])
const pizzaPromise3= makePizza(['cebolla', 'queso', 'peperoni', 'aguacate', 'piña', 'cebolla'])

pizzaPromise1.then(function(pizza){
  console.log(pizza)
})

pizzaPromise2.then(function(pizza){
  console.log(pizza)
})

pizzaPromise3.then(function(pizza){
  console.log(pizza)
})

const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

dinnerPromise.then(function(pizzas){
  console.log(pizzas)
})