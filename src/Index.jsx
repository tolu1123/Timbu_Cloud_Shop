import React,{useState, useContext} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Toppicks from "./components/TopPicks.jsx";
import ThrillSection from "./components/ThrillSection.jsx";
import ShopNow from "./components/ShopNow.jsx";
import Footer from "./components/Footer.jsx";


import {CartContext} from './components/CartContext.jsx';
import { ShoppingContext } from "./components/ShoppingContext.jsx";

export default function Index() {

  const [cartContent, setCartContent] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [shoppingBasket, setShoppingBasket] = useState(JSON.parse(localStorage.getItem('shoppingBasket')) || {});
  
  return (
    <>
      <CartContext.Provider value={{cartContent, setCartContent}}>
        <ShoppingContext.Provider value={{shoppingBasket, setShoppingBasket}}>

        <Header textColor='text-white'/>
        <Hero />
        <Toppicks/>
        <ThrillSection/>
        <ShopNow/>
        <Footer/>

        </ShoppingContext.Provider>
      </CartContext.Provider>
    </>
  );
}