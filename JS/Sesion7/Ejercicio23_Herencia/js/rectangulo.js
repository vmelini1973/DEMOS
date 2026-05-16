class Rectangulo extends Figura {

    constructor (x,y,base, altura){
    super(x,y); //Llamo al constructor de la superclase
    this.base = base;
    this.altura = altura
    }

    area () {
        return this.base * this.altura;
    }

    mostrarDatos(){
        return super.mostrarDatos() +" base: " + this.base + " altura: " +this.altura;
        
    }

}