let huecos = [1];
huecos.push (2);
console.log("longitud: " + huecos.length);
delete huecos[0];
huecos[0] = 3; 
for (i =0; i < huecos.length; i++) {
console.log("Tamaño: " +huecos.length)
console.log("posición: " + i);   
console.log("Numero: " + huecos[i]);
}
console.log("Repetimos");

huecos.forEach((numerito,index) => 
    {
    console.log("Tamaño: " +huecos.length);
    console.log("posición: " + index);   
    console.log("Numero: " + huecos[index]);
});
Find . devuelve el valor
Filter . devuelve registros
Some . si alguno lo cumple  !== devuelve todos menos los que lo cumplen
map .  Añade una nueva columna
reduce . devuelve un valor, por ejemplo por una función
