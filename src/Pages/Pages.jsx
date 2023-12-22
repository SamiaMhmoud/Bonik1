import React from 'react'
import Home from '../Components/MainPage/Home'
import FlashDeals from '../Components/FlashDeals/FlashDeals'
import TopCate from '../Components/Top/TopCate';
import NewArrivals from '../Components/NewArrivals/NewArrivals';
import Discount from '../Components/Discount/Discount';
import Shop from '../Components/shops/Shop';
import Annocument from '../Components/annocument/Annocument';
import Wrapper from '../Components/Wrapper/Wrapper';

const Pages = ({ productItems , addToCart }) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={ productItems } addToCart={ addToCart } />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop addToCart={ addToCart } />
      <Annocument />
      <Wrapper />
    </>
  );
};

export default Pages
