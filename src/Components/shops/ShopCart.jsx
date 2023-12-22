import React, { useState } from "react"
import Sdata from "./Sdata"
// import { showSelectedCategory } from './Catg'

const ShopCart = ( { addToCart , cateData} ) =>
{
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const shopData = cateData.length ? cateData : Sdata.shopItems;
  
  return (
    <>
      {shopData.map((shopItems, idx) => {
        return (
          <div className='box' key={idx}>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price d_flex'>
                  <h4>${shopItems.price}.00 </h4>
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
