import React,{useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

import { useNavigate } from "react-router";

import CheckOutHeader from "./components/CheckOutHeader";
import CheckOutProducts from "./components/CheckOutProducts.jsx";
import CheckOutForm from "./components/CheckOutForm.jsx";
import Footer from "./components/Footer.jsx";

import {CartContext} from './components/CartContext.jsx';
import {ShoppingContext} from './components/ShoppingContext.jsx';


export default function CheckOut() {
    const navigate = useNavigate();

    const [cartContent, setCartContent] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [shoppingBasket, setShoppingBasket] = useState(JSON.parse(localStorage.getItem('shoppingBasket')) || {});

    useEffect(() => {
        if(cartContent.length === 0){
            //Navigate to the home page if the shopping basket is empty
            navigate('/');
        }
    }, [cartContent])

    return (
        <CartContext.Provider value={{cartContent, setCartContent}}>
            <ShoppingContext.Provider value={{shoppingBasket, setShoppingBasket}}>
                <div className="flex flex-col justify-center items-center">
                    <CheckOutHeader />
                    <div className="checkout-body w-full md:w-4/5 lg:w-3/5 pt-[100px]">
                        <CheckOutProducts />
                        <CheckOutForm/>
                    </div>
                    <Footer/>
                    
                </div>
            </ShoppingContext.Provider>
        </CartContext.Provider>
    )
}