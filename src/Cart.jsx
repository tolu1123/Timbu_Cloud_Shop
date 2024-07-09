import React from "react";
import ReactDOM from "react-dom/client";

import CartHeader from "./components/CartHeader";
import CartItems from "./components/CartItems";
import Footer from "./components/Footer";

export default function Cart() {
    return (
        <>  
            <CartHeader/>
            <CartItems/>
            <Footer />
        </>
    )
}