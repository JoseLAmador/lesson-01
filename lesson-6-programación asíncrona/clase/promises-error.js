function makePizza(toppings){
  const pizzaPromise = new Promise(function(resolve, reject){

    // Si un topping es piña, rechazar

    if(toppings.includes('piña')){
      reject("En serio piña?, fuera de aquí");
    }

    const tiempoHorneado = 500 + (toppings.length * 200);

    setTimeout(function(){
      // Cuando este todo listo, puedes resolver esta promesa
      resolve(`Aquí está tu pizza con los ingredientes ${toppings.join(' ')}`);

    }, tiempoHorneado);

    
    // Si algo sale mal, puedes rechazar esta promesa


  });

  return pizzaPromise;
}

makePizza(['queso', 'piña'])
.then(function(pizza){
  console.log(pizza);
})
.catch(function(err) {
  console.log("OH no!")
  console.log(err)
})