import React from "react";
import ReactDom from 'react-dom/client';

import blissfulWand from '../../public/images/blissful-wand.jpeg';
import delightDuet from '../../public/images/delight-duet.jpeg';
import euphoriaElixir from '../../public/images/euphoria-elixir.jpeg';
import passionPod from '../../public/images/passion-pod.jpeg';

export default function Toppicks() {
    return (
        <div className="top-picks w-full pt-10 pb-10 roboto-slab-semibold">

            <h3 className="w-full text-center text-dullPink text-3xl px-5">Top picks for ultimate Satisfaction</h3>

            {/* This is the div that contains the first four popular picks */}
            <div className="flex flex-row flex-nowrap overflow-auto gap-5  md:grid md:grid-cols-3 lg:grid-cols-4 mt-8 px-5">
                {/* First product */}
                <div className="flex flex-col items-center text-text-pink justify-center gap-2 roboto-slab-regular">
                    <div className="img w-[200px] h-[200px] border-4 border-solid border-neutralPink rounded-full overflow-hidden">
                        <img src={blissfulWand} className="w-full h-full object-cover object-center" alt="" />
                    </div>
                    <div className="text flex flex-col justify-center items-center">
                        <h4 className="text-xl">Blissful Wand</h4>
                        <p className="text-base">
                            {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(10000)}
                        </p>
                    </div>
                    <button className="bg-dullYellow rounded-full roboto-slab-medium py-1 px-10">
                        Add to Cart
                    </button>
                </div>

                {/* Second product */}
                <div className="flex flex-col items-center text-text-pink justify-center gap-2 roboto-slab-regular">
                    <div className="img w-[200px] h-[200px] border-4 border-solid border-neutralPink rounded-full overflow-hidden">
                        <img src={delightDuet} className="w-full h-full object-cover object-center" alt="" />
                    </div>
                    <div className="text flex flex-col justify-center items-center">
                        <h4 className="text-xl">Delight Duet</h4>
                        <p className="text-base">
                            {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(14000)}
                        </p>
                    </div>
                    <button className="bg-dullYellow rounded-full roboto-slab-medium py-1 px-10">
                        Add to Cart
                    </button>
                </div>

                {/* Third product */}
                <div className="flex flex-col items-center text-text-pink justify-center gap-2 roboto-slab-regular">
                    <div className="img w-[200px] h-[200px] border-4 border-solid border-neutralPink rounded-full overflow-hidden">
                        <img src={euphoriaElixir} className="w-full h-full object-cover object-center" alt="" />
                    </div>
                    <div className="text flex flex-col justify-center items-center">
                        <h4 className="text-xl">Euphoria Elixir</h4>
                        <p className="text-base">
                            {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(18000)}
                        </p>
                    </div>
                    <button className="bg-dullYellow rounded-full roboto-slab-medium py-1 px-10">
                        Add to Cart
                    </button>
                </div>

                {/* Fourth product */}
                <div className="flex flex-col items-center text-text-pink justify-center gap-2 roboto-slab-regular">
                    <div className="img w-[200px] h-[200px] border-4 border-solid border-neutralPink rounded-full overflow-hidden">
                        <img src={passionPod} className="w-full h-full object-cover object-center" alt="Passion Pod" />
                    </div>
                    <div className="text flex flex-col justify-center items-center">
                        <h4 className="text-xl">Passion Pod</h4>
                        <p className="text-base">
                            {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(18000)}
                        </p>
                    </div>
                    <button className="bg-dullYellow rounded-full roboto-slab-medium py-1 px-10">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}