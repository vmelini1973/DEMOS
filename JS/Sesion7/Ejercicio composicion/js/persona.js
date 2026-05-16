//Una clase encapsulada aquella que todas sus propiedades son privadas 
//y se accede a través de get y set públicos

class Persona {
    #nombre;//#los convierte en atributros privados
    #edad;
    #sexo;
    #domicili;
/**
 * 
 * @param {string} nombre 
 * @param {number} edad 
 * @param {string} sexo 
 * @param {Domicili} domicili 
 */
    constructor(nombre,edad,sexo,domicili){
        this.setNombre(nombre);
        this.setEdad(edad);
        this.setSexo(sexo);
        this.setDomicili(domicili);


    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        if (typeof(nombre) == "string"){
            this.#nombre = nombre;

        } else { this.#nombre = 0
                console.log("Nombre No valido");
            }
    
    }



    getEdad(){
        return this.#edad;
    }


    setEdad(edad){
        if (edad>0 && edad<=127){
            this.#edad = edad;

        } else { this.#edad = 0
                console.log("Edad imposible");
            }
    
    }

    getSexo(){
        return this.#sexo;
    }

    setSexo(sexo){
        if (sexo == "Hombre" || sexo == "Mujer"){
            this.#sexo = sexo;

        } else {
                console.log("sexo erroneo");
            }
    
    }

    
    getDomicili(){
        return this.#domicili;
    }

    setDomicili(domicili){
        
            this.#domicili = domicili;

        }
    
    

    mostrar(){      
        return this.#nombre + " / " +this.#edad + " / " +this.#sexo + "/" +
         "</br>" + "Direccion: " + this.#domicili.mostrar(); 

    }
}
