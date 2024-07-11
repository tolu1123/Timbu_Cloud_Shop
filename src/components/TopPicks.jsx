import React from "react";
import ReactDom from 'react-dom/client';

import blissfulWand from '../../public/images/blissful-wand.jpeg';
import delightDuet from '../../public/images/delight-duet.jpeg';
import euphoriaElixir from '../../public/images/euphoria-elixir.jpeg';
import passionPod from '../../public/images/passion-pod.jpeg';

import TopPicksData from "./TopPicksData";
import products from "./product.js";

export default function Toppicks() {

    const selectedProducts = products.slice(9, 13);
    console.log(selectedProducts, 'this are selected products');
    const data = selectedProducts.map((product) => (
        <TopPicksData key={product.id} product={product} />
    ))

    return (
        <div className="top-picks w-full pt-10 pb-10 roboto-slab-semibold">

            <h3 className="w-full text-center text-dullPink text-3xl px-5">Top picks for ultimate Satisfaction</h3>

            {/* This is the div that contains the first four popular picks */}
            <div className="flex flex-row flex-nowrap overflow-auto gap-5  md:grid md:grid-cols-3 lg:grid-cols-4 mt-8 py-3 px-5">

                {data}
        
            </div>
        </div>
    )
}