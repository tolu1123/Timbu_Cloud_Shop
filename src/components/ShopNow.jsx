import React from 'react';
import ReactDOM from 'react-dom/client';

export default function ShopNow() {
    return (
        <div className="shop-now px-5 mt-20 mb-10">
            <div className="shop-now-header mb-10">
                <h3 className="w-full text-center sm:text-left text-dullPink text-3xl roboto-slab-semibold">
                    Shop Now
                </h3>
            </div>

            {/* Div for the product cards */}
            <div className="products flex flex-col items-center justify-center gap-6 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-8">


                <div className="w-full product-card border border-solid border-bleetYellow shadow-none  hover:shadow-xl hover:shadow-[#ccc] transition-all duration-300 sm:hover:w-[110%] sm:hover:z-[6] sm:hover:-translate-y-5">
                
                     
                    <div className="product-img w-full aspect-[386/365] bg-[url('../../public/images/ethereal-bloom.jpeg')] bg-left bg-cover ">

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
                
                     
                    <div className="product-img w-full aspect-[386/365] bg-[url('../../public/images/noir-eclipse.jpeg')] bg-left bg-cover ">

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
                
                     
                    <div className="product-img w-full aspect-[386/365] bg-[url('../../public/images/amber-serenity.jpeg')] bg-left bg-cover ">

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
                
                     
                    <div className="product-img w-full aspect-[386/365] bg-[url('../../public/images/radiant-delight.jpeg')] bg-left bg-cover ">

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
                </div>

            </div>
        </div>
    )
}