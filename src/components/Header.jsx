import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";

import { useNavigate} from "react-router";

import {CartContext} from './CartContext.jsx';


export default function Header(props) {

  const {cartContent, setCartContent} = useContext(CartContext);

  const [noOfItems, setNoOfItems] = useState(0)
  const [cartEmpty, setCartEmpty] = useState(cartContent.length <= 0 ? false : true);

  useEffect(() => {
    let cartData = cartContent;
    let productCount = cartData === null || cartData.length < 0 ? 0 : cartData.reduce((acc, currentElement) => {
      return parseInt(acc + currentElement.productQty);
    }, 0);
    setNoOfItems(productCount);

    setCartEmpty(cartContent.length <= 0 ? false : true);
  }, [cartContent])

  console.log(cartContent, cartEmpty, noOfItems)

  const navigate = useNavigate();

  const textColor = props.textColor;
  const [navSm, setNavSm] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  function navChecker() {
    if (window.innerWidth >= 640) {
      // I want to reset some state that will make the navbar show normally
      // We will set the navSm state to be true when we resize to more than 640px
      setNavSm(true);
    }
  }

  useEffect(() => {
    // This will check the width of the window and set the navSm state to true if the window is greater than 640px
    if (window.innerWidth >= 640) {
      setNavSm(true);
    }


    window.addEventListener("resize", navChecker);

    return () => {
      window.removeEventListener("resize", navChecker);
    };
  }, [dropDown]);

  return (
    <header className={`w-full flex flex-row justify-center items-center absolute ${textColor} px-5 py-8 lg:px-24`}>
      {/* Nav for mobile */}
      <nav className={`w-full ${textColor} grid grid-cols-3 justify-between items-center lg:hidden`}>
        {/* The nav for mobile view  */}
        {/* <div class="w-full nav-sm flex flex-row justify-between items-center"> */}
        <span
          className="hamburger inline-flex justify-start text-3xl md:text-4xl cursor-pointer"
          onClick={() => {
            setDropDown(dropDown => !dropDown);
            
            }
          }
        >
          {dropDown ? (
            <i className="fa-sharp fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-sharp fa-solid fa-bars"></i>
          )}
        </span>

        <a
          href=""
          className="logo inline-flex flex-col items-center justify-center w-fit just-another-hand"
        >
          {/* <h1 className='text-center w-fit inline-flex flex-col justify-center items-center'> */}
          <span className="inline m-0 text-[60px] leading-[60px]">Cloud 9</span>
          <span className="inline m-0 text-[30px] leading-[30px]">
            Perfumery
          </span>
          {/* </h1> */}
        </a>

        <div className="flex items-center gap-4 md:gap-12 text-xl md:text-3xl pr-5 md:pr-10 ml-auto">
          {/* The search icon */}
          <a className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>

          {/* The cart icon */}
          <span className="relative">
            <a className="" onClick={() => {
              navigate("/cart");
            }}>
              <i className="fa-solid fa-cart-shopping"></i>
            </a>

            {cartEmpty && <span className="bg-naturalPink rounded-full absolute px-2 -translate-y-3">
              {noOfItems}
            </span>}
          </span>
        </div>

        <div
          className={`${
            dropDown ? "transTopNormal" : "transTop"
          } dropDown absolute w-full left-0 text-livelyPink transition-all duration-1000`}
        >
          <ul className="w-full flex flex-col gap-5">
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#shopnow">Shop Now</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#blog">My Account</a>
            </li>
          </ul>
        </div>

        {/* </div> */}
      </nav>

      {/* This is the nav that appears at medium screens */}
      <nav className="w-full hidden lg:flex justify-between items-center gap-24">
        <div className="relative left-1/2 -translate-x-1/2 flex justify-center items-center gap-24 just-another-hand">
          <a href="#aboutus" className="inline-flex text-3xl">
            About Us
          </a>

          <a href="" className="logo">
            <h1 className="text-center">
              <span className="inline-block m-0 text-[60px] leading-[60px]">
                Cloud 9
              </span>
              <br />
              <span className="inline-block m-0 text-[30px] leading-[30px]">
                Perfumery
              </span>
            </h1>
          </a>

          <a href="#shopnow" className="inline-flex text-3xl">
            Shop Now
          </a>
        </div>

        <div className="flex justify-end items-center gap-16 mr-20 text-2xl">
          {/* The search icon */}
          <a href="" className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          {/* The profile icon */}
          <a href="" className="">
            <i className="fa-solid fa-user"></i>
          </a>
          {/* The cart icon */}
          <span className="relative cursor-pointer">
            <a  className="relative" onClick={() => {
              navigate("/cart");
            }}>
              <i className="fa-solid fa-cart-shopping"></i>
            </a>

            { cartEmpty && <span 
            className="bg-naturalPink rounded-full absolute px-2 -translate-y-3"
            onClick={() => {
              navigate('/cart');
            }}
            >
              {noOfItems}
            </span>}            
          </span>
        </div>
      </nav>
    </header>
  );
}
