import React, {createContext} from 'react'


export const CartContext = createContext({
    cartContent: JSON.parse(localStorage.getItem('cart')) || [],
    setCartContent: () => {}
})