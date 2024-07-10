import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

import visa from '../../public/images/visa-logo.png';
import mastercard from '../../public/images/mastercard-logo.png';


export default function CheckOutForm() {

    const [email, setEmail] = useState('');
    const [region, setRegion] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [paypal, setPaypal] = useState(false);
    const [bankTransfer, setBankTransfer] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);


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

                {/* Delivery Section */}
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

                    <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-3 pt-3">

                        <div className="w-full relative flex flex-col items-center">
                            <input 
                                type="text"
                                name="firstName" 
                                id="firstName"
                                required
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
                                className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink'
                            />

                            <label 
                            htmlFor="region"
                            className='text-sm poppins-regular peer-focus:-top-0.5 px-0.5 text-offWhite peer-focus:text-livelyPink peer-valid:-top-1 absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear bg-white'>
                                First Name
                            </label>
                        </div>

                        <div className="w-full relative flex flex-col items-center">
                            <input 
                                type="text"
                                name="lastName" 
                                id="lastName"
                                required
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value)
                                }}
                                className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink'
                            />

                            <label 
                            htmlFor="lastName"
                            className='text-sm poppins-regular peer-focus:-top-0.5 px-0.5 text-offWhite peer-focus:text-livelyPink peer-valid:-top-1 absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear bg-white'>
                                Last Name
                            </label>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center mt-5">
                        <input 
                            type="text"
                            name="address" 
                            id="address"
                            required
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value)
                            }}
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink'
                        />

                        <label 
                        htmlFor="address"
                        className='text-sm poppins-regular peer-focus:-top-0.5 px-0.5 text-offWhite peer-focus:text-livelyPink peer-valid:-top-1 absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear bg-white'>
                            Address
                        </label>
                    </div>

                    <div className="relative flex flex-col items-center mt-5">
                        <input 
                            type="text"
                            name="company" 
                            id="company"
                            required
                            value={company}
                            onChange={(e) => {
                                setCompany(e.target.value)
                            }}
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink'
                        />

                        <label 
                        htmlFor="company"
                        className='text-sm poppins-regular peer-focus:-top-0.5 px-0.5 text-offWhite peer-focus:text-livelyPink peer-valid:-top-1 absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear bg-white'>
                            Company[optional]
                        </label>
                    </div>

                    <div className="relative flex flex-col items-center mt-5">
                        <input 
                            type="text"
                            name="phone" 
                            id="phone"
                            required
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value)
                            }}
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink'
                        />

                        <label 
                        htmlFor="phone"
                        className='text-sm poppins-regular peer-focus:-top-0.5 px-0.5 text-offWhite peer-focus:text-livelyPink peer-valid:-top-1 absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear bg-white'>
                            Phone[optional]
                        </label>
                    </div>


                </div>

                {/* Payment Section */}
                <div className="contact poppins-medium mt-8">
                    <div className="payment-header">
                        <h4 className="text-2xl">Payment</h4>
                        <p className="roboto-slab-regular text-sm">All Transactions are secured and encrypted.</p>
                    </div>
                    <div className="payment-headway flex flex-row justify-between rounded-[13px_13px_0_0] px-5 md:px-10 py-8 border border-solid border-livelyPink my-5">
                            <h5 className="poppins-regular text-base">Card</h5>
                            <div className="flex flex-row justify-between pr-6 md:pr-0">
                                <img src={visa} alt="Visa logo" className="inline-block" />
                                <img src={mastercard} alt="Mastercard logo" className="inline-block" />
                            </div>
                    </div>

                    {/* Card Input Div */}
                    <div className="relative flex flex-col items-center mt-5">
                        <input 
                            type="text"
                            name="cardNumber" 
                            id="cardNumber"
                            required
                            value={cardNumber}
                            onChange={(e) => {
                                setCardNumber(e.target.value)
                            }}
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink'
                        />

                        <label 
                        htmlFor="cardNumber"
                        className='text-sm poppins-regular peer-focus:-top-0.5 px-0.5 text-offWhite peer-focus:text-livelyPink peer-valid:-top-1 absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear bg-white'>
                            Card Number
                        </label>

                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-base">
                            <i className="fa-regular fa-lock-keyhole"></i>
                        </span>
                    </div>

                    {/* Div for expiration date and security code number */}
                    <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-3 pt-3">

                        <div className="w-full relative flex flex-col items-center">
                            <input 
                                type="text"
                                name="expirationDate" 
                                id="expirationDate"
                                required
                                value={expirationDate}
                                onChange={(e) => {
                                    setExpirationDate(e.target.value)
                                }}
                                className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink'
                            />

                            <label 
                            htmlFor="expirationDate"
                            className='text-sm poppins-regular peer-focus:-top-0.5 px-0.5 text-offWhite peer-focus:text-livelyPink peer-valid:-top-1 absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear bg-white'>
                                Expiration date MM/YY
                            </label>
                        </div>

                        <div className="w-full relative flex flex-col items-center">
                            <input 
                                type="text"
                                name="securityCode" 
                                id="securityCode"
                                required
                                value={securityCode}
                                onChange={(e) => {
                                    setSecurityCode(e.target.value)
                                }}
                                className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink'
                            />

                            <label 
                            htmlFor="lastName"
                            className='text-sm poppins-regular peer-focus:-top-0.5 px-0.5 text-offWhite peer-focus:text-livelyPink peer-valid:-top-1 absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear bg-white'>
                                Security code
                            </label>

                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-base">
                                <i className="fa-light fa-circle-question"></i>
                            </span>
                        </div>
                    </div>

                    
                    <div className="relative flex flex-col items-center my-5">
                        <input 
                            type="text"
                            name="cardHolderName" 
                            id="cardHolderName"
                            required
                            autoFocus={true}
                            value={cardHolderName}
                            onChange={(e) => {
                                setCardHolderName(e.target.value)
                            }}
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink'
                        />

                        <label 
                        htmlFor="email"
                        className='text-sm poppins-regular peer-focus:-top-0.5 px-0.5 text-offWhite peer-focus:text-livelyPink peer-valid:-top-1 absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear bg-white'>
                            Name on card
                        </label>
                    </div>

                    <div className="payment-footway border border-solid border-livelyPink px-5 py-8 flex flex-row justify-between items-center my-5">
                        <div className="flex flex-row gap-3">
                            <input 
                                type="radio"
                                name="paypal" 
                                id="paypal"
                                required
                                autoFocus={true}
                                value={paypal}
                                onChange={(e) => {
                                    setPaypal(e.target.checked)
                                    if(bankTransfer) {
                                        setBankTransfer(false);
                                    
                                    }
                                }}
                                className='w-[20px] peer h-[20px] border border-solid px-3 border-offBlack outline-0 rounded-full accent-livelyPink focus:border-livelyPink caret-livelyPink'
                            />

                            <label htmlFor="paypal" className="poppins-regular text-base text-offBlack">
                                Paypal
                            </label>
                        </div>

                        <div className="flex flex-row gap-3">
                            <input 
                                type="radio"
                                name="bankTransfer" 
                                id="bankTransfer"
                                required
                                autoFocus={true}
                                value={bankTransfer}
                                onChange={(e) => {
                                    setBankTransfer(e.target.checked)
                                    if(paypal) {
                                        setPaypal(false);
                                    }
                                }}
                                className='peer w-[20px] h-[20px] border border-solid px-3 border-offBlack outline-0 rounded-full accent-livelyPink focus:border-livelyPink caret-livelyPink'
                            />

                            <label htmlFor="bankTransfer" className="poppins-regular text-base text-offBlack">
                                Bank Transfer
                            </label>
                        </div>
                    </div>

                    <div className="remember-me mt-10">
                        <div className="remember-me-header">
                            <h6>Remember me</h6>
                        </div>

                        <div className="remember-content flex flex-row gap-4 px-5 py-5 mt-5 border border-solid border-livelyPink">
                            <input 
                                type="checkbox"
                                name="rememberMe" 
                                id="rememberMe"
                                required
                                autoFocus={true}
                                value={rememberMe}
                                onChange={(e) => {
                                    setRememberMe(e.target.checked)
                                }}
                                className='peer w-[20px] h-[20px] border border-solid px-3 border-offBlack accent-livelyPink outline-0 focus:border-livelyPink caret-livelyPink'
                            />

                            <label htmlFor="bankTransfer" className="poppins-regular text-base text-offBlack">
                                    Save my Information for fast checkout
                            </label>
                        </div>
                    </div>
                

                </div>

                <button className="w-full p-3 transitions-all duration-300 bg-tradyPink hover:bg-white border border-solid border-tradyPink text-[#fff] font-semibold rounded-md poppins-semibold text-lg mt-10 hover:text-livelyPink">
                    Pay Now
                </button>
            </form>
        </div>
    )
}