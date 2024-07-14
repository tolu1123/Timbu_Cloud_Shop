import React, {useState, useEffect, useContext} from "react";

import { useNavigate } from "react-router";
import { ShoppingContext } from "./ShoppingContext.jsx";

export default function BannerProduct() {
    const navigate = useNavigate();

    const {shoppingBasket, setShoppingBasket} = useContext(ShoppingContext);

    const product = {
        name: "Radiant Moon",
        productTag: "Luminous Night",
        description: 'Illuminate your evenings with Radiant Moon, a fragrance that captures the mysterious and enchanting beauty of the night. This captivating scent blends shimmering floral notes with warm, sensual undertones, creating an aura of elegance and allure. Radiant Moon is perfect for those who seek to embrace the magic of the night and radiate confidence and sophistication.',
        productImage: [
            {
                model_name: "products",
                model_id: "7b31023efc49483194bd1efe4cf18860",
                organization_id: "9a805f7be6d245f68c03472d1b1ee477",
                filename: "4b3cc954520044d284ad5928b46a08c9.jpg",
                url: "cloud9/product_radiant_moon_a865e8_1.jpg",
                is_featured: false,
                save_as_jpg: true,
                is_public: true,
                file_rename: false,
                position: 1
            },
            {
                model_name: "products",
                model_id: "7b31023efc49483194bd1efe4cf18860",
                organization_id: "9a805f7be6d245f68c03472d1b1ee477",
                filename: "1f9df31561224f758bbc985d2fff06a4.jpg",
                url: "cloud9/product_radiant_moon_542d28_2.jpg",
                is_featured: false,
                save_as_jpg: true,
                is_public: true,
                file_rename: false,
                position: 2
            }
        ],
        productPrice: 14500,
        productQty: 1,
        availableQty: 10,
        id: 'PROD015'

    }

    // Writing the add to shopping basket function
    function addToBasket(product) {
        const basket = {
            productName: product.name,
            productTag: product.productTag,
            productText: product.description,
            productImage: product.productImage, //An array of images
            productPrice: product.productPrice,
            productQty: product.productQty,
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
                    <img src={`https://api.timbu.cloud/images/${product.productImage[0].url}`} alt="hero-product" className=" h-full object-cover sm:object-top" />
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