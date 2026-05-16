class Circulo extends Figura {

    constructor (x,y,radio){
    super(x,y); //Llamo al constructor de la superclase
    this.radio = radio;
    }

    area () {
        return Math.PI * Math.pow(this.radio,2);
    }

    mostrarDatos(){
        return super.mostrarDatos() +" radio: " + this.radio;
    }

}