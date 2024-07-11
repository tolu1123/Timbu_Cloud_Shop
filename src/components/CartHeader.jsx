import React from 'react'
import ReactDOM from 'react-dom/client'

import { useNavigate } from 'react-router'


export default function CartHeader() {
    const navigate = useNavigate();

    return (
        <header className='flex flex-row justify-between items-center shadow-md text-tradyPink px-5 py-8 w-full fixed top-0 bg-white z-50'>
            <div className="text-sm sm:text-lg poppins-semibold">
                <span className="">
                    <i className="fa-regular fa-chevron-left"></i>
                </span>
                <span className='cursor-pointer' onClick={
                    () => {
                        navigate('/')
                    }
                }>CONTINUE SHOPPING</span>
            </div>

            <h3 className="poppins-semibold text-2xl">
                Your Cart
            </h3>
        </header>
    )
}