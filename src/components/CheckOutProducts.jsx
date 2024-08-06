import React, {useState, useEffect, useContext} from "react";
import ReactDOM from "react-dom/client";


import { CartContext } from './CartContext.jsx';


export default function CheckOutProducts() {
  const {cartContent, setCartContent} = useContext(CartContext);
  const [pos, setPos] = useState(cartContent.reduce((accumulator, currentElement) => {
    return accumulator + (currentElement.productQty * currentElement.productPrice);
}, 0));


  useEffect(() => {
    setPos(cartContent.reduce((accumulator, currentElement) => {
        return accumulator + (currentElement.productQty * currentElement.productPrice);
    }, 0))
  }, [cartContent])

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  function deleteProduct(productToDelete) {
    const updatedCartContent = cartContent.filter((product) => product.productName !== productToDelete.productName);
    console.log(updatedCartContent);

    updateCartContent(updatedCartContent);
  }

  // Updating cartContent and saving to local storage:
  function updateCartContent(updatedCartContent) {
    setCartContent(updatedCartContent); // Update state
    localStorage.setItem('cart', JSON.stringify(updatedCartContent)); // Save to local storage
  }

  let data = cartContent.map((product, index) => (
    <div key={product.id} className="cart-item flex flex-col sm:flex-row justify-center items-center mt-6">
                    
        <div className="cart-item-img w-1/2 sm:w-[25%] aspect-square ">
            <img className="w-full h-full object-center object-cover" src={`/perfumeImages/${product.productImage[1]}`} alt={`${product.productTag}`} />
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
                <div className="flex flex-row justify-center items-center w-fit border border-solid border-tradyPink rounded-full invisible">
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
    <div className="checkout-products w-full p-5">
      {data}
      <hr className="my-8 border border-solid border-tradyPink" />

      <div className="price-div text-tradyPink poppins-medium">
        <div className="subtotal flex justify-between">
          <h5 className="text-base">Subtotal</h5>
          <p className="text-lg">
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(pos)}
          </p>
        </div>
        <div className="total flex justify-between">
          <h5 className="text-base">Total</h5>
          <p className="text-lg poppins-semibold">
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(pos)}
          </p>
        </div>
      </div>
    </div>
  );
}
