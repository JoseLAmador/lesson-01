// class Persona {

//   // Todas la inicializaciones de la clase
//   // antes de ser utilizada
//   constructor(nombre){
//     this.nombre = nombre;
//   }

//   decirNombre(){
//     console.log(this.nombre)
//   }
// }

// // Quitar new y observar el error
// const jose = new Persona("Jose L");
// console.log(jose);

// jose.decirNombre();



// Ejemplo 2

// class Cuadrado {
//   constructor(lado){
//     this.lado = lado;
//   }

//   getArea(){
//     return this.lado * this.lado;
//   }

//   nombreFigura(){
//     console.log("Hola soy un cuadrado");
//   }
// }

// const areaCuadrado = new Cuadrado(20);
// const areaCuadrado2 = new Cuadrado(10);
// //console.log(areaCuadrado);
// //console.log(areaCuadrado2);
// console.log(areaCuadrado2.getArea(),
//   areaCuadrado2.nombreFigura()
//   );


// Ejemplo 3 Métodos estáticos

class PersonaStaticMode {

  constructor(nombre){
    this.nombre = nombre;
  }

  decirNombre(){
    console.log(this.nombre)
  }

  // palabra reservada static

  static crear(nombre) {
    return new PersonaStaticMode(nombre);
  }
}


const demo = new PersonaStaticMode("Luis");
demo.decirNombre();