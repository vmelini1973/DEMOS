function cambiarColor(event) {
    
    //Mostrar el id del botón donde se ha producido el evento
    //alert (event.target.id);

    switch (event.target.id) {
        
        case "btn1":
            document.getElementById("btn1").className = "rojo";
            document.getElementById("btn2").className = "gris";
            document.getElementById("btn3").className = "gris";
            break;

        case "btn2":
            document.getElementById("btn2").className = "verde";
            document.getElementById("btn1").className = "gris";
            document.getElementById("btn3").className = "gris";
            break;

        case "btn3":
            document.getElementById("btn3").className = "azul";
            document.getElementById("btn1").className = "gris";
            document.getElementById("btn2").className = "gris";
            break;

         default:
            break;

    }
}

//mostrar los nombres usando for in