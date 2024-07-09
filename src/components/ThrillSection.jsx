import React from "react";
import ReactDOM from "react-dom/client";

export default function ThrillSection() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center px-5 mt-10 mb-10 gap-10">
            <div className="thrill-header mb-5">
                <h3 className="w-full roboto-slab-semibold text-center text-dullPink text-5xl mb-10">Thrill. Bliss. Zen</h3>
                <p className="w-full text-naturalPink text-center text-base lg:text-lg roboto-slab-regular md:p-5">
                    Need pleasure on the go? We transformed our tantalizing, high-performance perfume into a delightful treat! It feels just like those classic, stimulating sensations.
                </p>
            </div>

            <div className="w-full thrill-gallery flex flex-col gap-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6 sm:px-20 lg:px-0">
                {/* The first gala image */}
                <div className="gala-1 group w-full aspect-[262/312] text-red-500 rounded-lg relative overflow-hidden">

                    <div className="gala-img w-full bg-[url('../../images/whisper-of-joy.jpeg')] bg-center bg-cover aspect-[262/312] group-hover:w-[120%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[5] transition-all duration-300">

                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-2 absolute z-[6] bottom-5">
                        <div className="flex flex-col justify-center items-center text-white">
                            <h4 className="roboto-slab-semibold text-xl">Whisper of Joy</h4>
                            <p className="roboto-slab-semibold text-base text-white">
                                {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(14000)}
                            </p>
                        </div>
                        <button className="w-fit bg-dullYellow rounded-full roboto-slab-medium py-0.5 px-10 text-heroPink ">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* The second gala image */}
                <div className="gala-1 group w-full aspect-[262/312] text-red-500 rounded-lg relative overflow-hidden">

                    <div className="gala-img w-full bg-[url('../../images/elysian-essence.jpeg')] bg-center bg-cover aspect-[262/312] group-hover:w-[120%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[5] transition-all duration-300">

                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-2 absolute z-[6] bottom-5">
                        <div className="flex flex-col justify-center items-center text-white">
                            <h4 className="roboto-slab-semibold text-xl">Elysian Essence</h4>
                            <p className="roboto-slab-semibold text-base text-white">
                                {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(17000)}
                            </p>
                        </div>
                        <button className="w-fit bg-dullYellow rounded-full roboto-slab-medium py-0.5 px-10 text-heroPink ">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* The third gala image */}
                <div className="gala-1 group w-full aspect-[262/312] text-red-500 rounded-lg relative overflow-hidden">

                    <div className="gala-img w-full bg-[url('../../images/sublime-serenity.jpeg')] bg-center bg-cover aspect-[262/312] group-hover:w-[120%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[5] transition-all duration-300">

                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-2 absolute z-[6] bottom-5">
                        <div className="flex flex-col justify-center items-center text-white">
                            <h4 className="roboto-slab-semibold text-xl">Sublime Serenity</h4>
                            <p className="roboto-slab-semibold text-base text-white">
                                {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(19000)}
                            </p>
                        </div>
                        <button className="w-fit bg-dullYellow rounded-full roboto-slab-medium py-0.5 px-10 text-heroPink ">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* The fourth gala image */}
                <div className="gala-4 group w-full aspect-[262/312] text-red-500 rounded-lg relative overflow-hidden">

                    <div className="gala-img w-full bg-[url('../../images/divine-pleasure.jpeg')] bg-center bg-cover aspect-[262/312] group-hover:w-[120%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[5] transition-all duration-300">

                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-2 absolute z-[6] bottom-5">
                        <div className="flex flex-col justify-center items-center text-white">
                            <h4 className="roboto-slab-semibold text-xl">Divine Pleasurey</h4>
                            <p className="roboto-slab-semibold text-base text-white">
                                {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(11000)}
                            </p>
                        </div>
                        <button className="w-fit bg-dullYellow rounded-full roboto-slab-medium py-0.5 px-10 text-heroPink ">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}