import { createContext, useState, useContext } from "react";
import {AuthContext} from "./AuthContext";

const CartContext = createContext()
const CartProvider = ({ children }) => {
    const {user, setUser} = useContext(AuthContext);
    const [cart, setCart] = useState([])

// change to useEffect
    const updateCart = () => {
        //updateCart

        if(JSON.stringify(user) != '{}')       //if user is logged in
            //update user field
            return
    }

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
            value={{ cart, setCart, updateCart}}
        >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }
