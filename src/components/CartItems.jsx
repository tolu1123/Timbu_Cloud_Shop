import React, {useState, useEffect, useContext} from "react";
import ReactDOM from "react-dom/client";


import blissfulWand from '../../public/images/blissful-wand.jpeg';
import RadiantDelight from '../../public/images/radiant-delight.jpeg';

import { useNavigate } from "react-router";
import { CartContext } from './CartContext.jsx';

export default function CartItems() {
    const {cartContent, setCartContent} = useContext(CartContext);
    const [pos, setPos] = useState(cartContent.reduce((accumulator, currentElement) => {
        return accumulator + (currentElement.qty * currentElement.rPrice);
    }, 0));

    const [noOfItems, setNoOfItems] = useState(0)

    useEffect(() => {
        let cartData = cartContent;
        let productCount = cartData === null || cartData.length < 0 ? 0 : cartData.reduce((acc, currentElement) => {
        return parseInt(acc + currentElement.productQty);
        }, 0);
        setNoOfItems(productCount);
    }, [cartContent])

    useEffect(() => {
        setPos(cartContent.reduce((accumulator, currentElement) => {
            return accumulator + (currentElement.productQty * currentElement.productPrice);
        }, 0))
    }, [cartContent])
    
    const navigate = useNavigate();
   
    // Updating cartContent and saving to local storage:
    function updateCartContent(updatedCartContent) {
        setCartContent(updatedCartContent); // Update state
        localStorage.setItem('cart', JSON.stringify(updatedCartContent)); // Save to local storage
    }

    function incrementQty(productToUpdate) {
        const updatedCartContent = cartContent.map((product) => {
          if (product.productName === productToUpdate.productName) { // Relying on the productName
            return { ...product, productQty: product.productQty + 1 };
          }
          return product;
        });
      
        updateCartContent(updatedCartContent);
    }
      
    function decrementQty(productToUpdate) {
        const updatedCartContent = cartContent.map((product) => {
          if (product.productName === productToUpdate.productName && product.productQty > 1) {
            return { ...product, productQty: product.productQty - 1 };
          }
          return product;
        });
      
        updateCartContent(updatedCartContent);
    }

    function setQty(productToUpdate, value) {
        const updatedCartContent = cartContent.map((product) => {
          if (product.productName === productToUpdate.productName) {
            return { ...product, productQty: value };
          }
          return product;
        });
        
        updateCartContent(updatedCartContent);
    }

    function deleteProduct(productToDelete) {
        const updatedCartContent = cartContent.filter((product) => product.productName !== productToDelete.productName);
        updateCartContent(updatedCartContent);
    }

    console.log(pos);

    let data = cartContent.map((product, index) => (
        <div key={product.id} className="cart-item flex flex-col sm:flex-row justify-center items-center">
                        
            <div className="cart-item-img w-full sm:w-[25%] aspect-square ">
                <img className="w-full h-full object-center object-cover" src={`https://api.timbu.cloud/images/${product.productImage[1].url}`} alt="Radiant Delight" />
            </div>
            <div className="cart-item-details text-tradyPink w-full sm:w-[75%] px-5 pt-8 md:pt-0 flex flex-col justify-left gap-4">
                <div className="w-full flex flex-row justify-between ">
                    <h4 className="roboto-slab-medium text-2xl w-full">{product.productName}</h4>
                    <span className="text-2xl cursor-pointer"
                        onClick={() => {
                            deleteProduct(product)
                        }}>
                        <i className="fa-regular fa-trash-can"></i>
                    </span>
                </div>
                
                <p className="roboto-slab-medium">{product.productTag}</p>
                <div className="counter flex flex-row justify-between w-full">
                    <div className="flex flex-row justify-center items-center w-fit border border-solid border-tradyPink rounded-full">
                        <button 
                        className="decrement  rounded-full w-[32px] h-[32px]"
                        onClick={() => {
                            decrementQty(product)
                        }}
                        >
                            <i className="fa-solid fa-minus"></i>
                        </button>
                        
                        <input type="number" 
                        inputMode="numeric" 
                        className="w-[32px] h-[32px] border border-solid border-tradyPink outline-none text-center rounded caret-tradyPink" 
                        value={product.productQty}
                        onChange={(e) => {
                            setQty(product, e.target.value)
                        }}
                        />

                        <button 
                        className="increment w-[32px] h-[32px] rounded-full"
                        onClick={() => {
                            incrementQty(product)
                        }}
                        >
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>

                    <p className="roboto-slab-semibold text-base">
                    {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(`${product.productPrice}`)}
                    </p>
                </div>
                
            </div>
        </div>
    ))
    

    return (
        <div className="w-full flex flex-col-reverse md:flex-row md:flex-nowrap gap-x-14 pt-[120px] px-5 relative">
            <div className="md:w-7/12 lg:w-9/12">
                <div
                    className="font-medium text-tradyPink text-[17px] border-b border-solid border-tradyPink pb-3"
                >
                    <h5 className="">
                    <span className="cartCounter">{noOfItems}</span> product in cart
                    </h5>
                </div>

                {/* The data container that will be filled with the products we have in our cart  */}
                <div
                    className="cartDisplay text-deepGreen divide-y divide-solid divide-tradyPink"
                >
                    <div className="flex flex-col gap-5 py-5 cart-item-container">
                        {data}
                    </div>

                    
                
                </div>
                
                {/* Subscribe div */}
                <div className="flex justify-center items-center">
                    <button className="w-full lg:w-1/2 text-center py-2 poppins-semibold text-lg !border my-4 border-solid border-tradyPink rounded-full text-tradyPink">
                        SUBSCRIBE AND SAVE 5%
                    </button>
                </div>

                {/* The Recommended Section */}
                <div className="recommend flex flex-col justify-center items-center mt-10">
                    <div className="recommend-header mb-8">
                        <h4 className="w-full roboto-slab-semibold text-center text-dullPink text-3xl px-5">Recommended</h4>
                    </div>

                    <div className="recommended-products w-full flex flex-col justify-center items-center py-5">
                        {/* First product */}
                        <div className="flex flex-col lg:flex-row justify-center items-center roboto-slab-regular gap-10 w-full lg:w-3/4">
                            <div className="img w-[200px] h-[200px] border-4 border-solid border-neutralPink rounded-full overflow-hidden">
                                <img src={blissfulWand} className="w-full h-full object-cover object-center" alt="" />
                            </div>

                            <div className="recommended-details text-tradyPink flex-col justify-center md:items-start">
                                <div className="text flex flex-col justify-center items-center md:items-start gap-2">
                                    <h4 className="text-xl">Blissful Wand</h4>
                                    <p className="text-base">
                                        {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(10000)}
                                    </p>
                                </div>
                                <button className="inline-flex bg-dullYellow rounded-full roboto-slab-medium py-1 px-10 mt-4">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="md:w-5/12 lg:w-3/12 text-tradyPink">
                {/* The div that contains the price and the checkout button  */}
                <div
                    className="flex md:flex-col items-center md:items-start gap-2 md:gap-0"
                >
                    <div className="hidden md:block">
                        <h5 className="text-[17px] font-bold">
                            Total<i className="fa-sharp fa-solid fa-colon text-sm"></i>
                        </h5>
                    </div>
                    <div className="font-bold text-deepGreen hidden md:block">
                        <span className="m-0 p-0 text-4xl">
                        {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(`${pos}`)}
                        </span>
                        <span
                            className="totalAmount tracking-tighter -ml-1 p-0 text-4xl"
                        ></span>
                    </div>

                    {/* The div containing the checkout button  */}
                     <div className="checkOutBtn hidden md:block mt-4 w-full">
                         
                        <button
                        className="group w-full p-3 transitions-all duration-300 bg-tradyPink hover:bg-white border border-solid border-tradyPink text-[#fff] rounded-md font-semibold"
                        onClick={() => {
                            navigate('/checkout')
                        }}
                        >
                        <span className="group-hover:text-tradyPink">
                            Proceed to Checkout
                        </span>
                        </button>

                    </div> 
                </div>
            </div>


            {/* The div containing the checkout button for the mobile screen */}
            <div className="checkOutBtn w-full flex flex-col fixed left-0 bottom-0 md:hidden bg-white p-5 z-10">
                <div className="flex flex-row justify-between items-center poppins-semibold text-livelyPink mb-3">
                    <h6 className="">Total[{noOfItems}]</h6>
                    <div className="">
                        <span className="m-0 p-0 text-lg">
                        {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(`${pos}`)}
                        </span>
                    </div>
                </div>
                <button
                    className="group w-full py-4 transitions bg-tradyPink hover:bg-white border border-solid border-tradyPink text-base text-[#fff] rounded-md font-semibold transition-all duration-300"
                    onClick={() => {
                        navigate('/checkout')
                    }}
                >
                    <span className="group-hover:text-tradyPink">Proceed to Checkout</span>
                </button>
            </div>
        </div>
       
    )
}