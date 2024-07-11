import React from 'react'
import ReactDOM from 'react-dom/client'

import { useNavigate } from 'react-router'

export default function EmptyCart() {
    const navigate = useNavigate();

    return (
        <div className="py-[120px] defaultCartData text-livelyPink">
                <div className="text-[10rem] flex items-center justify-center my-2 py-4">
                <i className="fa-light fa-cart-xmark"></i>
                </div>
                <div className="flex justify-center flex-col">
                    <div
                        className="text-center w-3/4 sm:w-1/2 m-auto text-[17px] font-normal"
                    >
                        Your Shopping cart is empty. Would you love to shop for some
                        beneficial <span className='just-another-hand text-3xl'>Cloud 9 perfumery</span> products
                    </div>

                    <div className="flex justify-center">
                        <button
                        className="group mt-5 w-fit py-3 px-5 text-white bg-livelyPink transitions hover:bg-white border border-solid border-livelyPink rounded-md"
                        onClick={() => {
                            navigate('/')
                        }}
                        >
                        <span className="group-hover:text-livelyPink">Back to Shop</span>
                        </button>
                    </div>
                </div>
            </div>
    )
}