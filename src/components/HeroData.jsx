import React from "react";
import ReactDOM from "react-dom/client";

function heroData(props) {
    console.log(props.perfume)
    return (
        <div className="hero-product flex flex-col sm:flex-row justify-between">
                <div className="w-full sm:w-80 sm:aspect-square sm:relative">
                    <img src={`https://api.timbu.cloud/images/`} alt="hero-product" className=" h-full object-cover sm:object-top" />
                </div>

                <div className="flex flex-col justify-center items-center relative -translate-y-[70px] sm:static sm:-translate-y-[0]">
                    <button className="bg-dullYellow inline-block h-fit text-heroPink text-xl py-3 px-10 roboto-slab-medium rounded-full hover:shadow-md active:bg-white"
                        onClick={() => {
                            addToCart(product)
                        }}
                    >Add to Cart
                    </button>
                </div>
                
        </div>
    )
}

export default {heroData}