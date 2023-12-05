import data from "../../data/productos.json"

export const pedirProductoById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoEncontrado = data.find((producto) => producto.id === parseInt(id));
            if (productoEncontrado) {
                resolve(productoEncontrado);
            } else {
                reject(new Error("Producto no encontrado"));
            }
        }, 500);
    });
};
