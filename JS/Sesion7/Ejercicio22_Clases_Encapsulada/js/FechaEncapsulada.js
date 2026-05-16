//Una clase encapsulada aquella que todas sus propiedades son privadas 
//y se accede a través de get y set públicos

class FechaEncapsulada {
    #dia;//#los convierte en atributros privados
    #mes;
    #anyo;

    constructor(dia,mes,anyo){
        this.setDia(dia);
        this.setMes(mes);
        this.setAnyo(anyo);

    }

    getDia(){
        return this.#dia;
    }

    setDia(dia){
        if (dia>0 && dia<=30){
            this.#dia = dia;

        } else { this.#dia = 0
                console.log("Día no valido");
            }
    
    }



    getMes(){
        return this.#mes;
    }


    setMes(mes){
        if (mes>0 && mes<=12){
            this.#mes = mes;

        } else { this.#mes = 0
                console.log("Mes no válido");
            }
    
    }

    getAnyo(){
        return this.#anyo;
    }

    setAnyo(anyo){
        if (anyo == 2022 || anyo == 2023){
            this.#anyo = anyo;

        } else {
                console.log("Año no válido");
            }
    
    }




    mostrar(){      
        return this.#dia + " / " +this.#mes + " / " +this.#anyo;

    }








}