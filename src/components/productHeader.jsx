import React from 'react'
import ReactDOM from 'react-dom/client'

import { useNavigate } from 'react-router'
import {CartContext} from './CartContext.jsx'



export default function ProductHeader() {
    const navigate = useNavigate();    

    return (
        <header className='flex flex-row justify-between items-center shadow-md text-tradyPink px-5 py-8 w-full fixed top-0 bg-white z-50'>
            <div className="text-sm sm:text-lg poppins-semibold flex flex-row "
             onClick={
                () => {
                    navigate('/')
                }
             }
            >
                <span className="text-2xl font-bold">
                    <i className="fa-regular fa-chevron-left"></i>
                </span>
                <span className='cursor-pointer hidden lg:block '>
                    CONTINUE SHOPPING</span>
            </div>

            <h3 className="poppins-semibold sm:text-xl text-2xl">
                Product Page
            </h3>
        </header>
    )
}