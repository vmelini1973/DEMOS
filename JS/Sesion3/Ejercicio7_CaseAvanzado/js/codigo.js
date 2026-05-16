
function cargarProvincias(){
    // Crear una lista de provincias
    var arrayProvincias = new 
    Array("Madrid", "Valencia", "Sevilla","Toledo");

    // Recorre la lista y por cada elemento generar una opción
    for (var indice in arrayProvincias) {
        document.getElementById("provincias").innerHTML +=
        "<option value='" + indice + "'>" + 
                arrayProvincias[indice] + "</option>";
    }
}

function cargarPoblaciones(){
    
    var seleccionado = 
        document.getElementById('provincias').selectedIndex;
    var arrayPoblaciones = null;
    
    switch (seleccionado) {

        case 1:
            arrayPoblaciones = ["getafe", "Las Rozas", "Torrelodones"];
            break;

        case 2:
            arrayPoblaciones = ["Gandía", "Olivas", "Játiva"];
            break;

        case 3:
            arrayPoblaciones = ["Dos Hermanas", "Espartinas", "Los Palacios"];
            break;

        case 4:
            arrayPoblaciones = ["Talavera", "Trillo"];
            break;
    }


    //limpiar todas las opciones anteriores
    document.getElementById('poblaciones').innerHTML = '<option> --selecciona-- </option>';

    for (var indice in arrayPoblaciones) {
        let opt = new Option(arrayPoblaciones[indice], indice);
        document.getElementById('poblaciones').options[parseInt(indice)+1] = opt;
    }
}