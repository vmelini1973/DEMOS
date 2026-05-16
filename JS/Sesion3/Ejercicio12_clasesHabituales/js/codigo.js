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


}