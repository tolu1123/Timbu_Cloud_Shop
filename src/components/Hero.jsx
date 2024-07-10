import React from "react";
import ReactDOM from "react-dom/client";

import heroProduct from './../../public/images/hero-product.png';

export default function Hero() {
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
            <div className="hero-product flex flex-col sm:flex-row justify-between">
                <div className="w-full sm:w-80 sm:aspect-square sm:relative">
                    <img src={heroProduct} alt="hero-product" className=" h-full object-cover sm:object-top" />
                </div>

                <div className="flex flex-col justify-center items-center relative -translate-y-[70px] sm:static sm:-translate-y-[0]">
                    <button className="bg-dullYellow inline-block h-fit text-heroPink text-xl py-3 px-10 roboto-slab-medium rounded-full">Add to Cart</button>
                </div>
                
            </div>
        </div>
    )
}