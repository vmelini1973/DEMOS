var estiloBorde = false; // false: no tiene borde, true: si lo tiene
var estiloColor = false; // false; no tiene color, true: si lo tiene
var estiloSombra = false; //false; no tiene sombra, true: si lo tiene

const rectang = document.querySelector("#cuadrado");

;


function borde(){
    if (!estiloBorde){
        rectang.style.border = "5px solid blue";
        estiloBorde = true;
    } else {
        rectang.style.border = "none";
        estiloBorde = false;

    }
}

function color(){
    if (!estiloColor){
        rectang.style.backgroundColor = "blue";
    } else {
        rectang.style.backgroundColor = "red";
    }
    estiloColor = !estiloColor;
}


function sombra(){
    if (!estiloSombra){
        rectang.className = "sombra";
    } else {
        rectang.className = null;
    }
    estiloSombra = !estiloSombra;
}