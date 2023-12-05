import data from "../../data/productos.json"

export const pedirProductos = async () => {
  return new Promise ((resolve) => {
    setTimeout(()=> {
      resolve(data);

    },500);
  })
}