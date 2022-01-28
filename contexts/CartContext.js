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


    const addToCartHandler = (id, qty, name, price) => {
        // Finds index of item in cart if exists.
        const foundIndex = cart.findIndex((cartItem) => cartItem.id == id );
        let newItem = { id, price, name, quantity: qty }
        // If item is not in cart, add to the cart array
        // Else get cart to a variable, get item, update item, update cart variable, then update state;
        if(foundIndex == -1)
            setCart([...cart, newItem])
        else {
            let newCart = [...cart];
            let updateItem = cart[foundIndex];
            updateItem.quantity = updateItem.quantity + qty;
            newCart[foundIndex] = updateItem;
            setCart([...newCart])
        }
    }

    return (
        <CartContext.Provider
            value={{ cart, setCart, updateCart, addToCartHandler}}
        >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }
