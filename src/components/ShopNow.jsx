import React from 'react';
import ReactDOM from 'react-dom/client';

import etherealBloom from '../../public/images/ethereal-bloom.jpeg';
import noirEclipse from '../../public/images/noir-eclipse.jpeg';
import amberSerenity from '../../public/images/amber-serenity.jpeg';
import RadiantDelight from '../../public/images/radiant-delight.jpeg';


import products from './product.js';
import ShopNowProducts from './shopNowProducts.jsx';
console.log(products.length);

export default function ShopNow() {
    
    let data = products.map(product => (
        <ShopNowProducts key={product.productName} product={product}/>
    )
)


    return (
        <div id='shopnow' className="shop-now px-5 mt-20 mb-10">
            <div className="shop-now-header mb-10">
                <h3 className="w-full text-center sm:text-left text-dullPink text-3xl roboto-slab-semibold">
                    Shop Now
                </h3>
            </div>

            {/* Div for the product cards */}
            <div className="products flex flex-col items-center justify-center gap-6 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-8">
                {data}

                {/* <div className="w-full product-card border border-solid border-bleetYellow shadow-none  hover:shadow-xl hover:shadow-[#ccc] transition-all duration-300 sm:hover:w-[110%] sm:hover:z-[6] sm:hover:-translate-y-5">
                
                     
                    <div className="product-img w-full aspect-[386/365] ">
                        <img className="w-full h-full object-center object-cover" src={etherealBloom} alt="Ethereal Bloom" />
                    </div>
                    <div className="product-info px-5 pt-3 pb-10 text-livelyPink">
                        <div className="flex flex-col justify-center items-left">
                            <h4 className="roboto-slab-medium text-2xl">Ethereal Bloom</h4>
                            <p className="product-category roboto-slab-medium">
                                For women [Gold]
                            </p>
                            <p className="roboto-slab-semibold text-base">
                                {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(13567)}
                            </p>
                        </div>

                        <button className="w-fit bg-dullYellow rounded-full roboto-slab-medium py-0.5 px-10 text-heroPink mt-2">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="w-full product-card border border-solid border-bleetYellow shadow-none  hover:shadow-xl hover:shadow-[#ccc] transition-all duration-300 sm:hover:w-[110%] sm:hover:z-[6] sm:hover:-translate-y-5 sm:hover:-translate-x-[5%]">
                
                     
                    <div className="product-img w-full aspect-[386/365] ">
                        <img className="w-full h-full object-center object-cover" src={noirEclipse} alt="Noir Eclipse" />
                    </div>
                    <div className="product-info px-5 pt-3 pb-10 text-livelyPink">
                        <div className="flex flex-col justify-center items-left">
                            <h4 className="roboto-slab-medium text-2xl">Noir Eclipse</h4>
                            <p className="product-category roboto-slab-medium">
                                Velvet Essence
                            </p>
                            <p className="roboto-slab-semibold text-base">
                                {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(17800)}
                            </p>
                        </div>

                        <button className="w-fit bg-dullYellow rounded-full roboto-slab-medium py-0.5 px-10 text-heroPink mt-2">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="w-full product-card border border-solid border-bleetYellow shadow-none  hover:shadow-xl hover:shadow-[#ccc] transition-all duration-200 sm:hover:w-[110%] sm:hover:z-[6] sm:hover:-translate-y-5">
                
                     
                    <div className="product-img w-full aspect-[386/365] ">
                        <img className="w-full h-full object-center object-cover" src={amberSerenity} alt="Amber serenity" />
                    </div>
                    <div className="product-info px-5 pt-3 pb-10 text-livelyPink">
                        <div className="flex flex-col justify-center items-left">
                            <h4 className="roboto-slab-medium text-2xl">Amber Serenity</h4>
                            <p className="product-category roboto-slab-medium">
                                Silk
                            </p>
                            <p className="roboto-slab-semibold text-base">
                                {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(30690)}
                            </p>
                        </div>

                        <button className="w-fit bg-dullYellow rounded-full roboto-slab-medium py-0.5 px-10 text-heroPink mt-2">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="w-full product-card border border-solid border-bleetYellow shadow-none  hover:shadow-xl hover:shadow-[#ccc] transition-all duration-200 sm:hover:w-[110%] sm:hover:z-[6] sm:hover:-translate-y-5">
                    <div className="product-img w-full aspect-[386/365] ">
                        <img className="w-full h-full object-center object-cover" src={RadiantDelight} alt="Radiant Delight" />
                    </div>
                    <div className="product-info px-5 pt-3 pb-10 text-livelyPink">
                        <div className="flex flex-col justify-center items-left">
                            <h4 className="roboto-slab-medium text-2xl">Radiant Delight</h4>
                            <p className="product-category roboto-slab-medium">
                                Joy of heaven.
                            </p>
                            <p className="roboto-slab-semibold text-base">
                                {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(40000)}
                            </p>
                        </div>

                        <button className="w-fit bg-dullYellow rounded-full roboto-slab-medium py-0.5 px-10 text-heroPink mt-2">
                            Add to Cart
                        </button>
                    </div>
                </div> */}

            </div>
        </div>
    )
}