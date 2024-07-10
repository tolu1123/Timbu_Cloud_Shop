import React from "react";
import ReactDOM from "react-dom/client";

import CartHeader from "./components/CartHeader.jsx";
import CartItems from "./components/CartItems.jsx";
import Footer from "./components/Footer.jsx";

export default function Cart() {
    return (
        <>  
            <CartHeader/>
            <CartItems/>
            <Footer />
        </>
    )
}