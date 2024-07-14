import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { useNavigate } from "react-router";

import { CartContext } from "./components/CartContext.jsx";
import { ShoppingContext } from "./components/ShoppingContext.jsx";

import ProductHeader from "./components/productHeader.jsx";
import ProductHero from "./components/ProductHero.jsx";
import Footer from "./components/Footer.jsx";

export default function Product() {
  const [cartContent, setCartContent] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [shoppingBasket, setShoppingBasket] = useState(
    JSON.parse(localStorage.getItem("shoppingBasket")) || {}
  );

  const navigate = useNavigate();


  return (
    <>
      <CartContext.Provider value={{ cartContent, setCartContent }}>
        <ShoppingContext.Provider value={{ shoppingBasket, setShoppingBasket }}>
          <ProductHeader textColor="text-livelyPink" />
          <ProductHero />
          <Footer />
        </ShoppingContext.Provider>
      </CartContext.Provider>
    </>
  );
}
