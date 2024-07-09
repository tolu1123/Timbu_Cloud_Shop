import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Toppicks from "./components/TopPicks.jsx";
import ThrillSection from "./components/ThrillSection.jsx";
import ShopNow from "./components/ShopNow.jsx";
import Footer from "./components/Footer.jsx";

export default function Main() {
  return (
    <>
      <Header />
      <Hero />
      <Toppicks/>
      <ThrillSection/>
      <ShopNow/>
      <Footer/>
    </>
  );
}