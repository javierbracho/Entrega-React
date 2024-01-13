import { createContext, useEffect, useState } from "react";
export const CartContext = createContext ()
import React from 'react'


const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []

const CartProvider = ({children}) => {
    const [carrito,setCarrito] = useState(carritoInicial)

    const agregarAlCarrito = (item, cantidad) => {
      const itemAgregado = {...item, cantidad}
      
    const nuevoCarrito = [...carrito]
      const productoEnCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

      if (productoEnCarrito){
        productoEnCarrito.cantidad += cantidad;

      } else {
        nuevoCarrito.push(itemAgregado)
      }

      setCarrito(nuevoCarrito)
    };

    const carritoContador = () => {
      return carrito.reduce((acc,product,) => acc + product.cantidad, 0)

    }

    const formatearPrecio = (precio) => {
      return precio.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
      });
    
    }

    const precioTotal = () => {
      const total = carrito.reduce ((acc,product) => acc + product.precio * product.cantidad, 0);
      const precioFormateado = formatearPrecio (total);
      return precioFormateado;
    }

    const IvaCarrito = () => {
      const iva = carrito.reduce ((acc,product) => acc + product.precio * product.cantidad, 0) * 0.19;
      const precioFormateado = formatearPrecio (iva);
      return precioFormateado;
    }

    const vaciarCarrito = () => {
      setCarrito ([]);
    }

    const eliminarProducto = (id) => {
      const nuevoCarrito = carrito.map((producto) => {
        if (producto.id === id) {
          if (producto.cantidad > 1) {
            return { ...producto, cantidad: producto.cantidad - 1 };
          } else {
            return null; 
          }
        } else {
          return producto;
        }
      });
  
      const nuevoCarritoFiltrado = nuevoCarrito.filter((producto) => producto !== null);
      setCarrito(nuevoCarritoFiltrado);
    };

    useEffect(() => {
       localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    

  return (
            <CartContext.Provider value = {{carrito, agregarAlCarrito, carritoContador, vaciarCarrito, precioTotal,formatearPrecio,eliminarProducto, IvaCarrito}}> 
                {children}
            </CartContext.Provider>
  )
}

export default CartProvider