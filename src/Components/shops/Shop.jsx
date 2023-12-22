import React, { useState } from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import Sdata from "./Sdata"
import "./style.css"

const Shop = ( { addToCart, shopItems} ) =>
{
  const [cateData,setCateData] = useState([]);
  const showSelectedCategory = (val) =>
  {
    if ( val === "all" )
    {
      const data = Sdata.shopItems;
      setCateData(data);
    } else
    {
      const data = Sdata.shopItems.filter( item => item.cateName === val );
      setCateData(data);
    }
  }
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <div className="cate-container">
            <Catg showSelectedCategory={showSelectedCategory}/>
          </div>
          <div className='content-width'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Mobile Phones</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  sgrid'>
              <ShopCart addToCart={ addToCart } cateData={ cateData }/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
