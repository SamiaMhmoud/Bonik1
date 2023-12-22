import React from 'react'
import Header from './Common/Header/Header'
import Footer from './Common/footer/Footer.jsx'
import './App.css'
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Pages from './Pages/Pages';
import Data from './Components/Data';
import { useState } from 'react';
import Cart from './Common/Cart/Cart';
const App = () => {
  const {productItems} = Data;
  const [ cartItem, setCartItem ] = useState( [] );

  // Add Product And Increase Quntity
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(prev =>
        prev.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
      } else {
        setCartItem(prev => [...prev, { ...product, qty: 1 }]);
        console.log(cartItem)
      }
  }

  // Decrease the quntity of product
  const decreaseQty = ( product ) => {
    const productExit = cartItem.find( ( item ) => item.id === product.id );
    if ( productExit.qty === 1 )
    {
      setCartItem(prev => prev.filter( ( item ) => item.id !== productExit.id ) );
    } else
    {
      setCartItem(prev =>
        prev.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  }

  // Remove product
  const removePro = ( product ) => {
    setCartItem( prev => prev.filter( ( item ) => item.id !== product.id ) );
  }

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route
            path="/"
            element={
              <Pages productItems={productItems} addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={ <Cart cartItem={ cartItem } addToCart={ addToCart } decreaseQty={ decreaseQty } removePro={ removePro } />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
