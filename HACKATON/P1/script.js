function sumar() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    const resultado = numero1 + numero2;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function borrar(){
document.getElementById("numero1").value="";
document.getElementById("numero2").value="";
document.getElementById("resultado").textContent = "Resultado:";
}