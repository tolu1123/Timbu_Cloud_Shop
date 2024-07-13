import React, {createContext} from 'react'


export const ShoppingContext = createContext({
    cartContent: JSON.parse(localStorage.getItem('shoppingBasket')) || {},
    setCartContent: () => {}
})