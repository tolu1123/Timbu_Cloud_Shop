import React, {useState, useEffect, useContext} from "react";
import ReactDOM from "react-dom/client";

import CartHeader from "./components/CartHeader.jsx";
import CartItems from "./components/CartItems.jsx";
import Footer from "./components/Footer.jsx";
import EmptyCart from "./components/emptyCart.jsx";

import { CartContext } from "./components/CartContext.jsx";
export default function Cart() {

    const [cartContent, setCartContent] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const [cartEmpty, setCartEmpty] = useState(cartContent.length <= 0? true: false);

    useEffect(() => {
        setCartEmpty(cartContent.length <= 0? true: false);
    }, [cartContent])

    console.log(cartContent,'daeda', cartEmpty)

    return (
        <>  
            <CartContext.Provider value={{cartContent, setCartContent}}>
                <CartHeader/>
                {!cartEmpty && <CartItems/>}
                {cartEmpty && <EmptyCart/>}
                <Footer />
            </CartContext.Provider>
        </>
    )
}