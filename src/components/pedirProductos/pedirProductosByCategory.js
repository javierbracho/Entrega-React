import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/data";

export const pedirProductoByCategory = (category) => {
  const productosRef = collection(db, "Productos");

  return new Promise((resolve, reject) => {
    getDocs(productosRef)
      .then((resp) => {
        const filtrado = resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        let productosFiltrados;

        if (category === "Todos los productos") {
          productosFiltrados = filtrado;
        } else {
          productosFiltrados = filtrado.filter(
            (producto) => String(producto.category) === String(category)
          );
        }

        resolve(productosFiltrados);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
