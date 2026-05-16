function funcFechas(){
var hoy = new Date();

document.write("Hoy : " + hoy +"<br/>");
document.write("getTime: " + hoy.getTime() +"<br/>");
document.write("Diferencia horaria : " + hoy.getTimezoneOffset() +"<br/>");
document.write("Dia de la semana (0-6) : " + hoy.getDay() +"<br/>");
document.write("Dia del mes : " + hoy.getDate() +"<br/>");
document.write("mes: 1-12: " + (hoy.getMonth() + 1) +"<br/>");
document.write("Año de dos cifras: " + (hoy.getYear()-100) +"<br/>");
document.write("Año de 4 cifras: " + hoy.getFullYear() +"<br/>");
document.write(" Hora: " + hoy.getHours() +"<br/>");
document.write(" Minutos: " + hoy.getMinutes() +"<br/>");
document.write(" segundos: " + hoy.getSeconds() +"<br/>");
document.write(" Milisegundos: " + hoy.getMilliseconds() +"<br/>");

};


function funcTexto(){
    var texto = "Esto es un texto para probar las funciones String";

    document.write("caracter unicode 74: " + String.fromCharCode(74) + "<br/>");
    document.write("unicode letra o: " + texto.charCodeAt(3) + "<br/>");
    document.write("indexOf letra a: " + texto.indexOf("a") + "<br/>");
    document.write("lastindexOf letra a: " + texto.lastIndexOf("a") + "<br/>");
    document.write("longitud texto: " + texto.length + "<br/>");
    document.write("substr 3,6: " + texto.substr(3,6) + "<br/>");
    document.write("substr 3: " + texto.substr(3) + "<br/>");
    document.write("slice 3: " + texto.slice(3) + "<br/>");
    document.write("slice 3,6: " + texto.slice(3,6) + "<br/>");
    document.write("substring 3,6: " + texto.substring(3,6) + "<br/>");
    document.write("substring 3: " + texto.substring(3) + "<br/>");
    document.write("minusculas: " + texto.toLowerCase() + "<br/>");
    document.write("mayusculas: " + texto.toUpperCase() + "<br/>");
    var datos = "15/11/2022".split("/");
    document.write("dia: " + datos[0] + "<br/>");
    document.write("mes: " + datos[1] + "<br/>");
    document.write("año: " + datos[2] + "<br/>");
}


function funcMatematicas(){
    document.write("log 1000: " + Math.log(1000) + "</br>");
    document.write("exponencial 7: " + Math.exp(7) + "</br>");
    document.write("raiz cuadrada 9: " + Math.sqrt(9) + "</br>");
    document.write("5 elevado a 3: " + Math.pow(5,3) + "</br>");
    document.write("Absoluto -56.4322: " + Math.abs(-56.4322) + "</br>");
    document.write("redondeo a la baja de 86.13254: " + Math.floor(86.13254) + "</br>");
    document.write("redondeo al alza de 86.13254: " + Math.ceil(86.13254) + "</br>");
    document.write("redondeo mediode 86.13254: " + Math.round(86.63254) + "</br>");
    document.write("aleatorio: " + Math.random() + "</br>");
    document.write("coseno de 100: " + Math.cos(100) + "</br>");
    document.write("maximo de varios: " + Math.max(1,3,7,5) + "</br>");
    document.write("minimo de varios: " + Math.min(1,3,7,5) + "</br>");
    document.write("maximo de varios: " + Math.PI + "</br>");
    document.write("maximo de varios: " + Math.E + "</br>");
    document.write("Area de un circulo: " + (Math.PI * Math.pow(56,2)) + "</br>");
    with(Math){
        document.write("Area de un circulo: " + (PI * pow(56,2)) + "</br>"); 
    }


};