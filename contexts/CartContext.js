import { createContext, useState } from "react"

const CartContext = createContext()
const CartProvider = ({ children }) => {
    const [items, setItems] = useState([{ id: 1, product: "BLE" }, { id: 2, product: "BLE" }, { id: 3, product: "BLE" },])
    //   const refreshItems = (items) => {
    //     setItems()
    //   }
    //   const addItem = (newItem) => {

    //     setItems((prevItems) => {return [newItem, ...prevItems]})
    //   }
    //   const deleteItem = (item) => {
    //   }
    return (
        <CartContext.Provider
            value={{ items, setItems }}
        >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }
