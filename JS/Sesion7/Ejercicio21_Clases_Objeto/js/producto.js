class Producto{
    identificador;
    descripcion;
    precio;
    
    constructor(identificador, descripcion, precio){
        this.identificador = identificador;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    //
    
        mostrarProducto() {
        return "Codigo: " +this.identificador +
        " descripcion: " +this.descripcion +
        " precio:" +this.precio + "<br/>";
        }
    
    
    
    }