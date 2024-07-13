import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

import { useNavigate } from "react-router";

import {CartContext} from './components/CartContext.jsx';
import { ShoppingContext } from "./components/ShoppingContext.jsx";

import Header from "./components/Header.jsx";
import ProductHero from "./components/ProductHero.jsx";
import Footer from "./components/Footer.jsx";



export default function Product() {
    const [cartContent, setCartContent] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [shoppingBasket, setShoppingBasket] = useState(JSON.parse(localStorage.getItem('shoppingBasket')) || {});

    const navigate = useNavigate();

    if(shoppingBasket === null || shoppingBasket.productName === '' || !shoppingBasket) {
        //Navigate to the home page if the shopping basket is empty
        navigate('/');
    }

    return (
        <>
            <CartContext.Provider value={{cartContent, setCartContent}}>
                <ShoppingContext.Provider value={{shoppingBasket, setShoppingBasket}}>
                    <Header textColor='text-livelyPink'/>
                    <ProductHero/>
                    <Footer/>
                </ShoppingContext.Provider>
            </CartContext.Provider>
        </>
    )
}