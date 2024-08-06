import React, {useState, useEffect, useContext} from "react";
import ReactDOM from "react-dom/client";

import { useNavigate } from "react-router";

import {CartContext} from './CartContext.jsx';
import { ShoppingContext } from "./ShoppingContext.jsx";

// Adding styles for the loading skeleton animation
import "../styles/ShopNow.css";

export default function ShopNowProducts({product, isLoading, updateIsLoading, index}) {

    const navigate = useNavigate();

    const {cartContent, setCartContent} = useContext(CartContext);
    const {shoppingBasket, setShoppingBasket} = useContext(ShoppingContext);

    console.log(index)

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

    //Fetching the image for the blob
    const [image, setImage] = useState('');

    useEffect(() => {
        fetch(`/perfumeImages/${product.photos[1]}`, {
            cache: 'no-cache',
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.blob();
            })
            .then(blob => {
                setImage(URL.createObjectURL(blob));
                checkIndex();
            })
            .catch(err => {
                console.log(err.message);
        })
    }, [product])

    function checkIndex() {
        // if index === 3, then we assume that all images has been fetched and we update the isLoading state
        if(index === 3){
            updateIsLoading(false);
        }
    }

    // Writing the add to shopping basket function
    function addToBasket(product) {
        const basket = {
            productName: product.name,
            productTag: product.tag,
            productText: product.text,
            productImage: product.photos, //An array of images
            productPrice: product.price,
            productQty: 1,
            availableQty: product.availableQty,
            id: product.id
        }

        // // Save to localStorage to persist the data
        localStorage.setItem('shoppingBasket', JSON.stringify(basket));

        // // Update the shopping basket in the ShoppingContext
        setShoppingBasket(basket);
        // Redirect to the product page
        navigate('/product');
    }

    return (
        isLoading? (
            <div className="shopNowLoading w-full h-[400px]"></div>
        )
        :
        (<div key={product.productName} className="group w-full h-full product-card border border-solid border-bleetYellow shadow-none  hover:shadow-xl hover:shadow-[#ccc] transition-all duration-300 sm:hover:z-[6] sm:hover:-translate-y-7"
        onClick={() => {
            addToBasket(product)
        }}
        >          
            <div className="product-img w-full aspect-[386/365] ">
            
                <img className="w-full h-full object-center object-cover" src={image} alt="Ethereal Bloom" />
            </div>
            <div className="product-info px-5 pt-3 pb-8 text-livelyPink">
                <div className="flex flex-col justify-center items-left">
                    <h4 className="roboto-slab-medium text-xl">{product.name}</h4>
                    <p className="product-category roboto-slab-medium">
                        {product.tag}
                    </p>
                    <p className="roboto-slab-semibold text-base">
                        {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(`${product.price}`)}
                    </p>
                </div>

                <button 
                className="w-full transition-all opacity-0 group-hover:opacity-100 bg-dullYellow rounded-full roboto-slab-medium py-2 px-10 text-heroPink mt-2 hover:shadow-md active:bg-white"
                onClick={() => {
                    addToBasket(product)
                }}
                >
                    View product
                </button>
            </div>
        </div>)
    )
}