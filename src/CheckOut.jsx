import React from "react";
import ReactDOM from "react-dom/client";
import CheckOutHeader from "./components/CheckOutHeader";
import CheckOutProducts from "./components/CheckOutProducts.jsx";
import CheckOutForm from "./components/CheckOutForm.jsx";

export default function CheckOut() {
    return (
        <div className="flex flex-col justify-center items-center">
            <CheckOutHeader />
            <div className="checkout-body w-full md:w-4/5 lg:w-3/5">
                <CheckOutProducts />
                <CheckOutForm/>
            </div>
            
        </div>
    )
}