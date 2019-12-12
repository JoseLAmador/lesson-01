class Rectangulo {
  constructor(alto, largo){
    this.alto = alto;
    this.largo = largo;
  }

  getArea(){
    return this.alto + this.largo;
  }
}

// Otra clase

class Cuadrado extends Rectangulo {
  constructor(alto){
    super(alto, alto);
  }

  // Mismo nombre del método
  getArea() {
    // return "Cuadrado" + (this.alto * this.alto);

    return super.getArea()
  }
}

const rectangulo = new Rectangulo(2, 3);
console.log(rectangulo);

const cuadrado = new Cuadrado(3);

console.log(cuadrado.getArea())