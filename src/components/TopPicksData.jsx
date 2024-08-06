import React, {useContext , useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

import { useNavigate } from "react-router";

import { CartContext } from "./CartContext";
import { ShoppingContext } from "./ShoppingContext.jsx";

export default function TopPicksData({product, isLoading, updateIsLoading, index}) {
    let navigate = useNavigate();

    const {cartContent, setCartContent} = useContext(CartContext);
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
    }, [product.photos[1]]);

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
            // if the data and the images has not been fetchModule, what will be displayed is a placeholder
             isLoading ?
                (<div className="placeholder flex flex-col items-center justify-center gap-2">
                    <div className="img w-[200px] h-[200px] border-4 border-solid rounded-full overflow-hidden">
                        {/* Image Div */}
                    </div>
                    <div className="text flex flex-col justify-center items-center">
                        <h4 className=""> </h4>
                        <p className="">

                        </p>
                    </div>
                    <button className="rounded-full py-1 px-10"
                    ></button>
                </div>)
                :
                (<div key={product.name} className="loading flex flex-col items-center text-text-pink justify-center gap-2 roboto-slab-regular">
                    <div className="img w-[200px] h-[200px] border-4 border-solid border-neutralPink rounded-full overflow-hidden">
                        <img src={image} className="w-full h-full object-cover object-center" alt={product.tag} />
                    </div>
                    <div className="text flex flex-col justify-center items-center">
                        <h4 className="text-xl">{product.name}</h4>
                        <p className="text-base">
                        {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(`${product.price}`)}
                        </p>
                    </div>
                    <button className="bg-dullYellow rounded-full roboto-slab-medium py-1 px-10 hover:shadow-md active:bg-white active:border-text-pink active:border-solid border border-dullYellow"
                        onClick={() => {
                            addToBasket(product)
                        }}
                    >
                        View product
                    </button>
                </div>)
        
        
    )
}