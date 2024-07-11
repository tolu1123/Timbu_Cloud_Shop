import React, {useContext , useEffect} from "react";
import ReactDOM from "react-dom/client";

import { CartContext } from "./CartContext";

export default function TopPicksData({product}) {
    const {cartContent, setCartContent} = useContext(CartContext);

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
        <div key={product.productName} className="flex flex-col items-center text-text-pink justify-center gap-2 roboto-slab-regular">
            <div className="img w-[200px] h-[200px] border-4 border-solid border-neutralPink rounded-full overflow-hidden">
                <img src={product.productImage} className="w-full h-full object-cover object-center" alt="" />
            </div>
            <div className="text flex flex-col justify-center items-center">
                <h4 className="text-xl">{product.productName}</h4>
                <p className="text-base">
                    {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(`${product.productPrice}`)}
                </p>
            </div>
            <button className="bg-dullYellow rounded-full roboto-slab-medium py-1 px-10 hover:shadow-md active:bg-white active:border-text-pink active:border-solid border border-dullYellow"
                onClick={() => {
                    addToCart(product)
                }}
            >
                Add to Cart
            </button>
        </div>
    )
}