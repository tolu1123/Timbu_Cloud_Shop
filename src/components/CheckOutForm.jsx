import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";




export default function CheckOutForm() {

    const [email, setEmail] = useState('');
    const [region, setRegion] = useState('');
    return (
        <div className="p-5">
            <form action="" autoComplete="off">
                
                {/* The contact */}
                <div className="contact poppins-medium">
                    <h4 className="text-2xl">Contact</h4>
                    
                    <div className="relative flex flex-col items-center mt-3">
                        <input 
                            type="text"
                            name="email" 
                            id="email"
                            required
                            autoFocus={true}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink'
                        />

                        <label 
                        htmlFor="email"
                        className='text-sm poppins-regular peer-focus:-top-0.5 px-0.5 text-offWhite peer-focus:text-livelyPink peer-valid:-top-1 absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear bg-white'>
                            Email
                        </label>
                    </div>
                </div>

                {/* The Region */}
                <div className="contact poppins-medium mt-6">
                    <h4 className="text-2xl">Delivery</h4>
                    
                    <div className="relative flex flex-col items-center mt-3">
                        <input 
                            type="text"
                            name="region" 
                            id="region"
                            required
                            value={region}
                            onChange={(e) => {
                                setRegion(e.target.value)
                            }}
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink'
                        />

                        <label 
                        htmlFor="region"
                        className='text-sm poppins-regular peer-focus:-top-0.5 px-0.5 text-offWhite peer-focus:text-livelyPink peer-valid:-top-1 absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear bg-white'>
                            Country/Region
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}