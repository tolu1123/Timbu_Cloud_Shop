import React, {useState, useEffect, useContext} from "react";

import { useNavigate } from "react-router";
import { ShoppingContext } from "./ShoppingContext.jsx";

export default function BannerProduct() {
    const navigate = useNavigate();

    const {shoppingBasket, setShoppingBasket} = useContext(ShoppingContext);

    const product = {
        id: "PROD015",
        name: "Radiant Moon",
        tag: "Luminous Night Elegance",
        text: "Illuminate your evenings with Radiant Moon, a fragrance that captures the mysterious and enchanting beauty of the night. This captivating scent blends shimmering floral notes with warm, sensual undertones, creating an aura of elegance and allure. Radiant Moon is perfect for those who seek to embrace the magic of the night and radiate confidence and sophistication.",
        photos: ["radiantMoon.png", "radiantMoon.png"],
        price: 14500,
        qty: 0,
        availableQty: 10
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

    return(
        <div className="hero-product flex flex-col sm:flex-row justify-between">
                <div className="w-full sm:w-80 sm:aspect-square sm:relative">
                    <img src={`/perfumeImages/${product.photos[0]}`} alt="hero-product" className=" h-full object-cover sm:object-top" />
                </div>

                <div className="flex flex-col justify-center items-center relative -translate-y-[70px] sm:static sm:-translate-y-[0]">
                    <button className="bg-dullYellow inline-block h-fit text-heroPink text-xl py-3 px-10 roboto-slab-medium rounded-full hover:shadow-md active:bg-white"
                        onClick={() => {
                            addToBasket(product)
                        }}
                    >
                        View more
                    </button>
                </div>
                
        </div>
    )
}