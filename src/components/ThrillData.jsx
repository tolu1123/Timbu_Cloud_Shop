import React, {useContext} from "react";
import ReactDOM from "react-dom/client";

import { useNavigate } from "react-router";

import { CartContext } from "./CartContext";
import { ShoppingContext } from "./ShoppingContext";

export default function ThrillData({product}) {
    let navigate = useNavigate();
    const { cartContent, setCartContent } = useContext(CartContext);
    const {shoppingBasket, setShoppingBasket} = useContext(ShoppingContext);

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
    function addToBasket(product) {
        const basket = {
            productName: product.name,
            productTag: product.description.split('\n')[0].slice(0, -1),
            productText: product.description.split('\n')[1],
            productImage: product.photos, //An array of images
            productPrice: product.current_price[0]['NGN'][0],
            productQty: 1,
            availableQty: product.available_quantity,
            id: product.unique_id
        }

        // // Save to localStorage to persist the data
        localStorage.setItem('shoppingBasket', JSON.stringify(basket));

        // // Update the shopping basket in the ShoppingContext
        setShoppingBasket(basket);
        // Redirect to the product page
        navigate('/product');
    }

    return (
        <div className="gala-1 group w-full aspect-[262/312] text-red-500 rounded-lg relative overflow-hidden">

            <div className="gala-img w-full aspect-[262/312] group-hover:w-[120%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[5] transition-all duration-300">
                <img className="w-full h-full object-center object-cover" src={`https://api.timbu.cloud/images/${product.photos[1].url}`} alt="Whisper of Joy" />
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-2 absolute z-[6] bottom-5">
                <div className="flex flex-col justify-center items-center text-white">
                    <h4 className="opacity-0 transition-all group-hover:opacity-100 roboto-slab-semibold text-xl">{product.name}</h4>
                    <p className="roboto-slab-semibold text-base text-white">
                    {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(`${product.current_price[0]['NGN'][0]}`)}
                    </p>
                </div>
                <button className="w-fit bg-dullYellow rounded-full roboto-slab-medium py-2 px-10 text-heroPink hover:shadow-md active:bg-white"
                onClick={() => {
                    addToBasket(product)
                }}
                >
                    View product
                </button>
            </div>
        </div>
    )
}