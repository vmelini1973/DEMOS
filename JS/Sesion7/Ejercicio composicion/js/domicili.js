class Domicili {
    #calle;//#los convierte en atributros privados
    #numero;
    #poblacion;
   /**
    * 
    * @param {string} calle 
    * @param {number} numero 
    * @param {string} poblacion 
    */

    constructor(calle,numero,poblacion){
        this.setCalle(calle);
        this.setNumero(numero);
        this.setPoblacion(poblacion);
       


    }

    getCalle(){
        return this.#calle;
    }

    setCalle(calle){
        if (typeof(calle) == "string"){
            this.#calle = calle;

        } else { this.#calle = 0
                console.log("Nombre No valido");
            }
    
    }



    getNumero(){
        return this.#numero;
    }


    setNumero(numero){
        if (numero>0){
            this.#numero = numero;

        } else { this.#numero = 0
                console.log("Edad imposible");
            }
    
    }

    getPoblacion(){
        return this.#poblacion;
    }

    setPoblacion (poblacion){
        
            this.#poblacion = poblacion;

    
            }
    

    mostrar(){      
        return this.#calle + ", " + this.#numero + " - " + this.#poblacion +
         "</br>";

    }
}