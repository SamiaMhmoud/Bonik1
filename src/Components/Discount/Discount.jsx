import React from "react"
import Dcard from "./Dcard"
import '../NewArrivals/style.css'
const Discount = () => {
  return (
    <>
      <section className='discount-sec background new-arrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt=""/>
              <h2>Big Discounts</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
