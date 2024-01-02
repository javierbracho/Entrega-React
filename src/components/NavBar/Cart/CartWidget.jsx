import { useContext } from "react"
import { CartContext } from "../../../Context/CartContext"

export const CartWidget = () => {

    const {carritoContador} =useContext(CartContext)
    return (
        <button className="bi bi-bag-x">
            <span className="numerito" > {carritoContador()} </span>
        </button>
    )
}