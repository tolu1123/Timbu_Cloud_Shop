import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

import { useNavigate } from "react-router";

import { CartContext } from "./CartContext";
import { ShoppingContext } from "./ShoppingContext";

// import loading styling
import '../styles/Thrill.css';

export default function ThrillData({product, isLoading, updateIsLoading, index}) {
    let navigate = useNavigate();
    const { cartContent, setCartContent } = useContext(CartContext);
    const {shoppingBasket, setShoppingBasket} = useContext(ShoppingContext);

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
    }, [])

    function checkIndex() {
        // if index === 3, then we assume that all images has been fetched and we update the isLoading state
        if(index >= 3){
            updateIsLoading(false);
        }
    }

     
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
        isLoading ? (
            <div className="thrillLoading w-full aspect-[262/312]  rounded-lg relative overflow-hidden">

            </div>
        ) :  
        (<div className="gala-1 group w-full aspect-[262/312] text-red-500 rounded-lg relative overflow-hidden">

            <div className="gala-img w-full aspect-[262/312] group-hover:w-[120%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[5] transition-all duration-300">
                <img className="w-full h-full object-center object-cover" src={image} alt="Whisper of Joy" />
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-2 absolute z-[6] bottom-5">
                <div className="flex flex-col justify-center items-center text-white">
                    <h4 className="opacity-0 transition-all group-hover:opacity-100 roboto-slab-semibold text-xl">{product.name}</h4>
                    <p className="roboto-slab-semibold text-base text-white">
                    {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(`${product.price}`)}
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
        </div>)
    )
}