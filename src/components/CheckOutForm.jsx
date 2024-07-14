import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

import visa from '../../public/images/visa-logo.png';
import mastercard from '../../public/images/mastercard-logo.png';

import {
    Form,
    redirect,
} from "react-router-dom";
  
export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    const email = updates.email;
    const region = updates.region;
    const firstName = updates.firstName;
    const lastName = updates.lastName;
    const address = updates.address;

    const cardNumber = updates.cardNumber;
    const expirationDate = updates.expirationDate;
    const securityCode = updates.securityCode;
    const cardHolderName = updates.cardHolderName;
    const transferType = updates.transferType;

    if(email && region && firstName && lastName && address && cardNumber && expirationDate && securityCode && cardHolderName && transferType) {
        return redirect("/successfulCheckout");
    }
}

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
    const [transferType, setTransferType] = useState('');

    const [rememberMe, setRememberMe] = useState(false);

    const [requiredFields, setRequiredFields] = useState(false);
    const [clickedOnce, setClickedOnce] = useState(false);

    useEffect(() => {
        //Check if the user has saved their information
        if(localStorage.getItem('rememberMe') === 'true'){
            setEmail(localStorage.getItem('email'));
            setRegion(localStorage.getItem('region'));
            setFirstName(localStorage.getItem('firstName'));
            setLastName(localStorage.getItem('lastName'));
            setAddress(localStorage.getItem('address'));
            setCompany(localStorage.getItem('company'));
            setPhone(localStorage.getItem('phone'));
        }
    }, [])

    useEffect(() => {
        // if rememmber me is checked, save the user's information
        if(rememberMe) {
            localStorage.setItem('email', email);
            localStorage.setItem('region', region);
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('address', address);
            localStorage.setItem('company', company);
            localStorage.setItem('phone', phone);
            localStorage.setItem('rememberMe', rememberMe);
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('region');
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');
            localStorage.removeItem('address');
            localStorage.removeItem('company');
            localStorage.removeItem('phone');
            localStorage.removeItem('rememberMe');
        }
    }, [rememberMe])

    useEffect(() => {
        if(email && region && firstName && lastName && address && cardNumber && expirationDate && securityCode && cardHolderName && transferType) {
            setRequiredFields(true);
        } else {
            setRequiredFields(false);
        }
    }, [email, region, firstName, lastName, address, cardNumber, expirationDate, securityCode, cardHolderName, transferType])



    return (
        <div className="p-5">
            <Form method='post' autoComplete="off">
                
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
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink poppins-regular'
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
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink poppins-regular'
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
                                className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink poppins-regular'
                            />

                            <label 
                            htmlFor="firstName"
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
                                className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink poppins-regular'
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
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink poppins-regular'
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
                            
                            value={company}
                            onChange={(e) => {
                                setCompany(e.target.value)
                            }}
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink poppins-regular'
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
                            
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value)
                            }}
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink poppins-regular'
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
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink poppins-regular'
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
                                className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink poppins-regular'
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
                                className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink poppins-regular'
                            />

                            <label 
                            htmlFor="securityCode"
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
                            className='w-full peer h-[40px] border border-solid px-3 border-offWhite outline-0 rounded-lg focus:border-livelyPink caret-livelyPink poppins-regular'
                        />

                        <label 
                        htmlFor="cardHolderName"
                        className='text-sm poppins-regular peer-focus:-top-0.5 px-0.5 text-offWhite peer-focus:text-livelyPink peer-valid:-top-1 absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear bg-white'>
                            Name on card
                        </label>
                    </div>

                    <div className="payment-footway border border-solid border-livelyPink px-5 py-8 flex flex-row justify-between items-center my-5">
                        <div className="flex flex-row gap-3">
                            <input 
                                type="radio"
                                name="transferType" 
                                id="paypal"
                                required
                                autoFocus={true}
                                value={'paypal'}
                                onChange={(e) => {
                                    setTransferType(e.target.value)
                                }}
                                checked={transferType === 'paypal'}
                                className='w-[20px] peer h-[20px] border border-solid px-3 border-offBlack outline-0 rounded-full accent-livelyPink focus:border-livelyPink caret-livelyPink'
                            />

                            <label htmlFor="paypal" className="poppins-regular text-base text-offBlack">
                                Paypal
                            </label>
                        </div>

                        <div className="flex flex-row gap-3">
                            <input 
                                type="radio"
                                name="transferType" 
                                id="bankTransfer"
                                required
                                autoFocus={true}
                                value={'bankTransfer'}
                                onChange={(e) => {
                                    setTransferType(e.target.value)
                                }}
                                checked={transferType === 'bankTransfer'}
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

                {clickedOnce && requiredFields && <div className="text-red-500 text-lg text-center mt-10 poppins-medium">
                    Please fill in the required fields
                </div>}

                <button 
                className="w-full p-3 transitions-all duration-300 bg-tradyPink hover:bg-white border border-solid border-tradyPink text-[#fff] font-semibold rounded-md poppins-semibold text-lg mt-5 hover:text-livelyPink"
                onClick={() => {
                    setClickedOnce(state => {
                        if(!state) {
                            return true;
                        }
                    });
                }}
                >
                    Pay Now
                </button>
            </Form>
        </div>
    )
}