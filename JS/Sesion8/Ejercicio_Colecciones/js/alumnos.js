class Alumno{

  
    #nombre;
    #direccion;
    
    constructor(nombre, direccion) {
     
        this.#nombre = nombre;
        this.#direccion = direccion;
       
     }
    
     get Nombre(){
        return this.#nombre
    
     }
    
     set Nombre(nombre){
        this.#nombre = nombre;
    
     }
    
    
     get Direccion(){
        return this.#direccion
    
     }
    
    
     set Direccion(direccion){
        this.#direccion = direccion
    
     }
    
     toString(){
    return + " Nombre: " +this.#nombre + ", Sueldo: " +this.#direccion;
    
     }
}


