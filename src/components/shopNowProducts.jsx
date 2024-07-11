import React, {useState, useEffect, useContext} from "react";
import ReactDOM from "react-dom/client";

import {CartContext} from './CartContext.jsx';

export default function ShopNowProducts(props) {
    let product = props.product;

    const {cartContent, setCartContent} = useContext(CartContext);


    useEffect(() => {
        // Define a named function for the event listener
        const handleStorageChange = () => {
          console.log('actived storage change')
        //   setCart(JSON.parse(localStorage.getItem('cart')));
        };
      
        // Add event listener to listen for the changes in localStorage
        window.addEventListener('storage', handleStorageChange);
      
        // Return a cleanup function that removes the event listener
        return () => {
          window.removeEventListener('storage', handleStorageChange);
        };
      }, []);

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

    return (
        <div key={product.productName} className="w-full product-card border border-solid border-bleetYellow shadow-none  hover:shadow-xl hover:shadow-[#ccc] transition-all duration-300 sm:hover:z-[6] sm:hover:-translate-y-7">          
            <div className="product-img w-full aspect-[386/365] ">
                <img className="w-full h-full object-center object-cover" src={product.productImage} alt="Ethereal Bloom" />
            </div>
            <div className="product-info px-5 pt-3 pb-10 text-livelyPink">
                <div className="flex flex-col justify-center items-left">
                    <h4 className="roboto-slab-medium text-2xl">{product.productName}</h4>
                    <p className="product-category roboto-slab-medium">
                        {product.productText}
                    </p>
                    <p className="roboto-slab-semibold text-base">
                        {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(`${product.productPrice}`)}
                    </p>
                </div>

                <button 
                className="w-fit bg-dullYellow rounded-full roboto-slab-medium py-0.5 px-10 text-heroPink mt-2 hover:shadow-md active:bg-white"
                onClick={() => {
                    addToCart(product)
                }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}