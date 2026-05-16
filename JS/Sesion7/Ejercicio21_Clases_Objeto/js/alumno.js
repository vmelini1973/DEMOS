class Alumno{

// Propiedades o atributos
nombre;
apellido;
nota;

//Constructor
//constructor(){}

    constructor(nombre, apellido, nota){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota = nota;
    }

//Metodo

    mostrarInformacion() {
    return " Nombre: " + this.nombre +
    " Apellido: " + this.apellido + 
    " Nota: " + this.nota;
    }

}
