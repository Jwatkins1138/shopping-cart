import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Loading from "./components/Loading";
import About from "./components/About";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    return () => {
      let tempCart = [...cart];
      tempCart.push(item);
      setCart(tempCart);
    }
  };

  const cartProps = {
    add: addToCart,
    items: cart
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <SubHeader />
      <>
      {loading === false ? (
      <Routes>
        <Route path= "shopping-cart/" element={<Home />} />
        <Route path= "shopping-cart/shop" element={<Shop cartProps={cartProps}/>} />
        <Route path= "shopping-cart/cart" element={<Cart cartProps={cartProps} />} />
        <Route path= "shopping-cart/about" element={<About />} />
      </Routes>
      ) : (
        <Loading />
      )}
      </>
    </BrowserRouter>
  );
};

export default App;
