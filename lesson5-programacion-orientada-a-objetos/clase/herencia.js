class Figura {
  constructor(alto, largo){
    this.alto = alto;
    this.largo = largo;
  }

  getArea(){
    return this.alto * this.largo;
  }
}

const rectangulo = new Figura(2, 3);
console.log(rectangulo);

class Cuadrado extends Figura {
  constructor(alto){
    super(alto, alto);
  }
}

const cuadradito = new Cuadrado(4);
console.log(cuadradito.getArea());