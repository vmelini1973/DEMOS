//Los recursos estáticos se utilizan cuando queremos compartir información entre diferentes objetos

class Empleado{

//propiedades de estancia (cada objeto mantiene una copia de estas propiedades)
//#numEmpleado;
#nombre;
#sueldo;

// Propiedad de clase (sólo existe una copia y reside en la clase)
 static #contador = 0; //Permite que no se reinicia con cada nuevo objeto

constructor(nombre, sueldo) {
    Empleado.#contador+= 1;
    //this.#numEmpleado = Empleado.#contador;
    this.#nombre = nombre;
    this.#sueldo = sueldo;
   


}

//Recurso de clase solo existe una copia y reside en la clase
static getContador(){
//This  no vale como puntero de clase , se utiliza el nombre de la clase
    return Empleado.#contador;
}

 get NumEmpleado(){
    return this.#numEmpleado

 }

 set NumEmpleado(numEmpleado){
    this.#numEmpleado = numEmpleado;

 }

 get Nombre(){
    return this.#nombre

 }

 set Nombre(nombre){
    this.#nombre = nombre;

 }


 get Sueldo(){
    return this.#sueldo

 }


 set Sueldo(sueldo){
    this.#sueldo = sueldo

 }



 toString(){
return "Numero Empleado: " + this.#numEmpleado + ", Nombre: " +this.#nombre + ", Sueldo: " +this.#sueldo;

 }

 equals(otro){
  /* if (this.#nombre === otro.getNombre) {
      return true;
      } else {
         return false;
      }*/
      return Object.is(this, otro);
   }
 }
