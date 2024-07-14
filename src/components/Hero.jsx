import React, {useState, useContext, useEffect} from "react";
import ReactDOM from "react-dom/client";

import products from './heroProduct.js'


import {CartContext} from './CartContext.jsx';
import { useData } from "./fetchProduct.js";
import BannerProduct from './BannerProduct.jsx'



export default function Hero() {

    const { cartContent, setCartContent } = useContext(CartContext);
    
    function addToCart(product) {
        // Check if our cart has been created or not
        if (localStorage.getItem('cart') === null) {
            
            // If cart has not been created, create it
            // Create an array to store the items in the cart
            let cartArray = [];
            let cartProduct = product;
            // I will check and update the no of items in the shoppingBasket before i save it
            cartProduct.productQty = 1;
            cartArray.push(cartProduct);

            // Store the array in the localStorage
            localStorage.setItem('cart', JSON.stringify(cartArray));

            // update the cart in the CartContext
            let cartTable = JSON.parse(localStorage.getItem('cart'));
            setCartContent(cartTable);

        }else {
            // if we have the item is in the array already, we wiil update the 
            // quantity of the item in our cart, if not we will add the item to the cart
            const cart = JSON.parse(localStorage.getItem('cart'));

            // The custom find function
            function find(product) {
                let res = cart.find(data => data.productName === product.productName);
                return Boolean(res);
            }
            
            let searchResult = find(product);
            if(searchResult){
                // if the item is in the cart, we will update the quantity of item in the cart
                // Get the index of the item in the cart
                let itemIndex = cart.findIndex(element => element.productName === product.productName)
                // Update the quantity of the item in the cart
                cart[itemIndex].productQty = parseInt(cart[itemIndex].productQty) + 1;


                // Store the updated cart in the localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                // update the cart in the CartContext
                let cartTable = JSON.parse(localStorage.getItem('cart'));
                setCartContent(cartTable);

            } else {
                 
                // if the item is not in the cart, we will increment the qty and add the item to the cart
                let cartProduct = product;
                cartProduct.productQty = 1;
                cart.push(cartProduct);

                // Store the updated cart in the localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                // update the cart in the CartContext
                let cartTable = JSON.parse(localStorage.getItem('cart'));
                setCartContent(cartTable);
            }

        }
    }

    // const data = 
    //     <div className="hero-product flex flex-col sm:flex-row justify-between">
    //             <div className="w-full sm:w-80 sm:aspect-square sm:relative">
    //                 <img src={`https://api.timbu.cloud/images/${perfume[0].photos[1].url}`} alt="hero-product" className=" h-full object-cover sm:object-top" />
    //             </div>

    //             <div className="flex flex-col justify-center items-center relative -translate-y-[70px] sm:static sm:-translate-y-[0]">
    //                 <button className="bg-dullYellow inline-block h-fit text-heroPink text-xl py-3 px-10 roboto-slab-medium rounded-full hover:shadow-md active:bg-white"
    //                     onClick={() => {
    //                         addToCart(product)
    //                     }}
    //                 >Add to Cart
    //                 </button>
    //             </div>
                
    //     </div>
    // console.log(data);

    return (
        <div className="hero w-full items-center sm:items-start pt-[164px] flex flex-row justify-center flex-wrap">
            {/* The hero has two div's */}
            <div className="imageDiv hidden sm:block sm:w-1/2">

            </div>
            {/* The hero text */}
            <div className="heroText p-5 sm:w-1/2 text-white text-3xl  text-center sm:text-left mt-16 sm:text-5xl roboto-slab-regular !leading-[66px]">
                <h2>
                    Etheral Bloom: &nbsp; 
                    <br className="hidden sm:block" />
                    Captivating Elegance &nbsp;
                    <br className="hidden sm:block" />
                    and Unforgettable &nbsp;
                    <br className="hidden sm:block" />
                    Allure in every spray.
                    
                </h2>
                
            </div>
            {/* The hero product */}
            <BannerProduct />
        </div>
    )
}