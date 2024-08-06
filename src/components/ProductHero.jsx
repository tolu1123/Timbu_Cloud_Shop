import React, {useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom/client';

import { CartContext } from './CartContext';
import { ShoppingContext } from './ShoppingContext';



export default function ProductHero() {
    const [cartVisible, setCartVisible] = useState(false);
    const [noOfAddedItems, setNoOfAddedItems] = useState(0);
    const {cartContent, setCartContent} = useContext(CartContext);
    const {shoppingBasket, setShoppingBasket} = useContext(ShoppingContext);

    const [pos, setPos] = useState(cartContent.reduce((accumulator, currentElement) => {
        return accumulator + (currentElement.productQty * currentElement.productPrice);
    }, 0));

    useEffect(() => {
        setPos(cartContent.reduce((accumulator, currentElement) => {
            return accumulator + (currentElement.productQty * currentElement.productPrice);
        }, 0))
    }, [cartContent])


    const [currentImage, setCurrentImage] = useState(`/perfumeImages/${shoppingBasket.productImage[0]}`);
    const [imgIndex, setImgIndex] = useState(0);

    // Function to loop through the images and display them in a thumbnail
    const thumbnail = shoppingBasket.productImage.map((image, index) => (
        <a href='#' className={`block w-28 aspect-square rounded-md overflow-hidden outline-2 outline-offset-4 outline ${imgIndex === index ? 'outline-tradyPink' : 'outline-offWhite'}`} key={index}
        onClick={() => {
            setCurrentImage(`/perfumeImages/${image}`);

            setImgIndex(index);
        }}
        >
            <img src={`/perfumeImages/${image}`} alt="" className="w-full h-full object-cover object-center aspect-square"/>
        </a>
    ))

    useEffect(() => {
        // Effect to scroll back to the top
        window.scrollTo(0, 0);
    }, [])


    // Example of updating cartContent and saving to local storage:
    function updateCartContent(updatedCartContent) {
        setShoppingBasket(() => updatedCartContent); // Update state

        // update the local storage
        localStorage.setItem('shoppingBasket', JSON.stringify(updatedCartContent));
    }

    function incrementQty(product) {

        let updatedCartContent= { ...product, productQty: parseInt(product.productQty) + 1 };
      
        updateCartContent(updatedCartContent);
    }
      
    function decrementQty(product) {
        if (product.productQty > 1) {
            let updatedCartContent= { ...product, productQty: parseInt(product.productQty) - 1 };
            console.log(updatedCartContent)

            updateCartContent(updatedCartContent);
        }
    }

    function setQty(product, value) {
        const numValue = parseInt(value, 10);

        // Check if the value is not a number or less than 1, set to 1
        if (isNaN(numValue) || numValue < 1) {
            updateCartContent({ ...product, productQty: 1 });
        } else {
            updateCartContent({ ...product, productQty: numValue });
        }
    }

    function addToCart(product) {
        // console.log(product);
        // Check if our cart has been created or not
        if (localStorage.getItem('cart') === null) {
            // If cart has not been created, create it
            // Create an array to store the items in the cart
            let cartArray = [];
            // Push the data
            cartArray.push(product);
            
            //set the noOfAddedItems
            setNoOfAddedItems(product.productQty); 

            // Store the array in the localStorage
            localStorage.setItem('cart', JSON.stringify(cartArray));

            // update the cart in the CartContext
            let cartTable = JSON.parse(localStorage.getItem('cart'));
            setCartContent(cartTable);

        }else {
            // if we have the item is in the array already, we wiil update the 
            // quantity of the item in our cart, if not we will add the item to the cart
            const cart = JSON.parse(localStorage.getItem('cart'));

            // The custom find function
            function find(product) {
                let res = cart.find(data => data.productName === product.productName);
                return Boolean(res);
            }
            
            let searchResult = find(product);
            if(searchResult){
                // if the item is in the cart, we will update the quantity of item in the cart
                // Get the index of the item in the cart
                let itemIndex = cart.findIndex(element => element.productName === product.productName)
                // Update the quantity of the item in the cart
                cart[itemIndex].productQty = parseInt(cart[itemIndex].productQty) + product.productQty;

                // Set the noOfAddedItems
                setNoOfAddedItems(product.productQty);


                // Store the updated cart in the localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                // update the cart in the CartContext
                let cartTable = JSON.parse(localStorage.getItem('cart'));
                setCartContent(cartTable);

            } else {
                // set the noOfAddedItems
                setNoOfAddedItems(product.productQty);
                 
                // if the item is not in the cart, we will increment the qty and add the item to the cart
                cart.push(product);

                // Store the updated cart in the localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                // update the cart in the CartContext
                let cartTable = JSON.parse(localStorage.getItem('cart'));
                setCartContent(cartTable);
            }

        }
        setCartVisible(true);
        setTimeout(() => {
            setCartVisible(false);
        }, 4000);
    }



    return (
        <>
                {cartVisible && <div class="cartConfirmation z-[1500] text-center fixed top-[120px] right-2 sm:right-5  border border-solid rounded-[0.375rem] border-tradyPink bg-white bg-opacity-70 px-5 py-3 text-tradyPink">
        
                    <div class="absolute left-0 -translate-x-1/2 icon text-deepGreen text-xl p-0">
                    <i class="fa-solid fa-badge-check"></i>
                    </div>

                    <div class="mess font-normal"><span class="numOfItem">{parseInt(noOfAddedItems) > 1? `${noOfAddedItems} products`: `${noOfAddedItems} product`}</span> has been added to cart.</div>

                </div>}
        
            <div
            className="cartItem grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5 md:gap-x-10 lg:gap-x-12 pt-40 mb-5 mx-auto px-5"
            >
                {/* image of the item */}
                <div className="w-full flex flex-col items-center lg:items-end">
                    <div
                        className="flex flex-row flex-nowrap overflow-x-auto w-[280px] md:w-[350px] lg:w-[410px] aspect-square text-sm rounded-[10px] shadow-md shadow-[#acacac]"
                    >
                        <img
                        className="productImage block w-full h-full object-cover object-center transition-all"
                        src={currentImage}
                        alt="The product image"
                        />
                    </div>
                    
                    {/* Div for thumbnail */}
                    <div className="md:w-7/8 lg:w-4/6 mt-5">
                        <div className="flex flex-row justify-center py-5 gap-5 items-center">
                            {thumbnail}
                        </div>
                    </div>
                </div>

                {/* About the item  */}
                <div className="aboutItem sm:w-4/5 sm:col-start-2 sm:col-span-1">
                {/* Name of the item */}
                    <h2
                        className="productName aboutTitle text-4xl sm:text-3xl pt-6 sm:pt-0 font-black text-tradyPink leading-[1.25] mb-2 roboto-slab-medium"
                        id="productName"
                    >{shoppingBasket.productName}</h2>

                    {/* The tag  */}
                    <h6
                        className="text-tradyPink roboto-slab-medium"
                    >
                        {shoppingBasket.productTag}
                    </h6>


                    {/* The price tag  */}
                    <div className="flex flex-row items-center gap-2 mt-2 roboto-slab-medium">
                        <h5 className="text-tradyPink text-xl leading-none">
                        <span className="rPrice">{new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(`${shoppingBasket.productPrice}`)}</span>
                        </h5>
                    </div>

                    {/* A little story about the item */}
                    <p className="aboutProduct text-lg mt-4 mb-3 roboto-slab-regular">
                        {shoppingBasket.productText}
                    </p>

                    {/* The quantity input and the incrementor and decrementor button  */}
                    <div className=" ">
                        {/* The Quantitylabel and quantity input  */}
                        <div className="w-fit flex flex-row justify-center items-center border border-solid border-tradyPink rounded-full text-tradyPink">
                            <button 
                            className="decrement  rounded-full w-[40px] h-[40px]"
                            onClick={() => {
                                decrementQty(shoppingBasket)
                            }}
                            >
                                <i className="fa-solid fa-minus"></i>
                            </button>
                            
                            <input type="number" 
                            inputMode="numeric" 
                            className="w-[40px] h-[40px] border border-solid border-tradyPink outline-none text-center rounded caret-tradyPink" 
                            value={shoppingBasket.productQty}
                            onChange={(e) => {
                                setQty(shoppingBasket, e.target.value)
                            }}
                            />

                            <button 
                            className="increment w-[40px] h-[40px] rounded-full"
                            onClick={() => {
                                incrementQty(shoppingBasket)
                            }}
                            >
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    {/* The add cart button */}
                    <button 
                    className="w-fit bg-dullYellow rounded-full roboto-slab-medium py-2.5 px-10 text-heroPink mt-5 hover:shadow-md active:bg-white text-lg"
                    onClick={() => {
                        addToCart(shoppingBasket)
                    }}
                    >
                        Add to Cart
                    </button>

                    
                </div>
        </div>
    </>
    )
}