class Productos {
    constructor() {
        this.producto = [];
    }

    listar() {
        return this.producto;
    }

    guardar(productos) {
        this.producto.push(productos);
    }

    actualizar(idProducto, nuevoProducto) {
        this.producto[idProducto] = nuevoProducto;
    }

    borrar(idProducto) {
        let productoBorrado = this.producto.splice(idProducto, 1);
        return productoBorrado;
    }
}

module.exports = new Productos();