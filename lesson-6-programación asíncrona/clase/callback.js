const divEl = document.querySelector(".go");

// 1.- Cambiar el texto del DIV.GO cuando le des click

divEl.addEventListener("click", ()=> {
  divEl.textContent = "Demo";

  // 2.- Se convierta en un circulo despues de dos segundos

  setTimeout(() => {
    divEl.classList.add("circle")

  // 3.- Cambiar color de fondo por rojo, despues de 0.5segundos
  
    setTimeout(() => {
      divEl.classList.add("red")

      //4.- Cambiar a posición inicial despues de .25segundos
  
      setTimeout(() => {
        divEl.classList.remove("circle")

        //5.- Cambiar a morado despues de .3segundos

        setTimeout(()=>{
          divEl.classList.remove("red")
          divEl.classList.add("purple")

          // Agregar un fadeOut despues de 0.5s
          setTimeout(()=>{
            divEl.classList.add("fadeOut")
          }, 500)
        }, 300);
      }, 250);

    }, 500);

  }, 2000);

  
}) 


// CALLBACK HELL

// 1.- Cambiar el texto del DIV.GO cuando le des click
// 2.- Se convierta en un circulo despues de dos segundos
// 3.- Cambiar color de fondo por rojo, despues de 0.5segundos
//4.- Cambiar a posición inicial despues de .25segundos
// 5.- Cambiar a morado despues de .3segundos
// 6.- Agregar un fadeOut despues de 0.5s
