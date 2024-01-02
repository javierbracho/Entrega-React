import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/data";

export const pedirProductoById = (id) => {
  const docRef = doc(db, "Productos", id); 

  return new Promise((resolve, reject) => {
    getDoc(docRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          resolve({ ...docSnapshot.data(), id: docSnapshot.id });
        } else {
          reject(new Error("El producto con el ID especificado no existe"));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

