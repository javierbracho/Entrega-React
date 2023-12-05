import data from "../../data/productos.json";

export const pedirProductoByCategory = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productosFiltrados = category === "Todos los Productos"
        ? data
        : data.filter((producto) => String(producto.category) === String(category));

      if (productosFiltrados.length > 0) {
        resolve(productosFiltrados);
      } else {
        reject(new Error("No se encontraron productos para la categoría especificada"));
      }
    }, 500);
  });
};
