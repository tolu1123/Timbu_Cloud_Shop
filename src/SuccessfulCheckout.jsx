import React, {useState, useContext, useEffect} from "react";
import ReactDOM from "react-dom/client";

import { useNavigate } from "react-router";
import {CartContext} from './components/CartContext.jsx';
import {ShoppingContext} from './components/ShoppingContext.jsx';

export default function SuccessfulCheckout() {
    const navigate = useNavigate();
    const [cartContent, setCartContent] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [shoppingBasket, setShoppingBasket] = useState(JSON.parse(localStorage.getItem('shoppingBasket')) || {});

    function clearCart() {
        // Store the updated cart in the localStorage
        localStorage.setItem('cart', JSON.stringify([]));

        // update the cart in the CartContext
        setCartContent(() => []);
    }

    function clearShoppingBasket() {
        const basket = {};
        // // Save to localStorage to persist the data
        localStorage.setItem('shoppingBasket', JSON.stringify(basket));

        // // Update the shopping basket in the ShoppingContext
        setShoppingBasket(() => {});
    }

    useEffect(() => {   
        clearCart();
        clearShoppingBasket();
    }, [shoppingBasket])

    return (

        <div className="w-dvh h-dvh flex flex-col items-center justify-center">

            <div className="text-[280px] text-tradyPink">
                <i className="fa-sharp fa-regular fa-badge-check"></i>
            </div>
            <div className="">
                <p className="tradyPink text-xl">
                    Your Order has been successfully placed.
                </p>
                <div 
                className="flex justify-center text-tradyPink just-another-hand text-4xl underline decoration-tradyPink decoration-solid mt-3 cursor-pointer"
                onClick={() => {
                    navigate('/')
                }}
                >
                    Shop more
                     
                </div>
            </div>

        </div>
    )
}