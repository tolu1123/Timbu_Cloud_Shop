import React from 'react';
import ReactDOM from 'react-dom/client';

export default function CheckOutProducts() {
    return (
        <div className="checkout-products w-full p-5">
            {/* First cart item */}
            <div className="cart-item flex flex-col sm:flex-row justify-center items-center">

                <div className="cart-item-image w-full sm:w-[25%] aspect-square bg-[url('../../public/images/radiant-delight.jpeg')] bg-left bg-cover rounded-md">
                    
                </div>
                <div className="cart-item-details text-tradyPink w-full sm:w-[75%] px-5 pt-8 md:pt-0 flex flex-col justify-left gap-4">
                    <div className="w-full flex flex-row justify-between ">
                        <h4 className="roboto-slab-medium text-2xl w-full">Radiant delight</h4>
                        <span className="text-2xl">
                            <i class="fa-regular fa-trash-can"></i>
                        </span>
                    </div>
                    
                    <p className="roboto-slab-medium">Joy in Heaven</p>
                    <div className="counter flex flex-row justify-between w-full">
                        <div className="flex flex-row justify-center items-center w-fit border border-solid border-tradyPink rounded-full invisible">
                            <button className="decrement  rounded-full w-[32px] h-[32px]">
                                <i className="fa-solid fa-minus"></i>
                            </button>
                            
                            <input type="text" value='1' inputMode="numeric" className="w-[32px] h-[32px] border border-solid border-tradyPink outline-none pl-[16px] rounded caret-tradyPink" />

                            <button className="increment w-[32px] h-[32px] rounded-full">
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </div>

                        <p className="roboto-slab-semibold text-base">
                        {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(40000)}
                        </p>
                    </div>
                    
                </div>
            </div>

            <hr className='my-8 border border-solid border-tradyPink' />

            <div className="price-div text-tradyPink poppins-medium">
                <div className="subtotal flex justify-between">
                    <h5 className='text-base'>Subtotal</h5>
                    <p className='text-lg'>
                        {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(40000)}
                    </p>
                </div>
                <div className="total flex justify-between">
                    <h5 className='text-base'>Total</h5>
                    <p className='text-lg poppins-semibold'>
                        {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(40000)}
                    </p>
                </div>
            </div>
        </div>
    )
}