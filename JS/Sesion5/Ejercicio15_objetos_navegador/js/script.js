function mostrar() {
    console.log("Hola");
 //Resolución Pantalla
console.log("Resolución: " + screen.width + " x " + screen.height);
console.log("Resolución: " + window.innerWidth + " x " + window.innerHeight);

// Navegador
console.log("Navegador: " + navigator.appName);
console.log("Navegador: " + navigator.appCodeName);
console.log("Versión: " + navigator.appversion);
//console.log("Cookies: " + navigator.cookieenabled);
//console.log("Idioma: " + navigator.languages);

//Url
console.log("URL: " + location.pathname);
console.log("Port: " + location.port);
console.log("Host:" + location.host);
console.log("HostName: " + location.hostname);
console.log("Protocolo: " + location.protocol); 

//Reemplazar la URL
//location.replace("HTTP: //www.marca.es")

//Acceder al Historial
console.log("Historial: "+ history.lenght)
history.back();
history.forward();
}