import React from 'react'
import TopCart from './TopCart'
import './style.css'

const TopCate = () => {
    return (
        <>
        <section className='top-cate background'>
            <div className='container'>
            <div className='heading d_flex'>
                <div className='heading-left row  f_flex'>
                    <i className='fa-solid fa-border-all'></i>
                    <h2>Top Categories</h2>
                </div>
                <div className='heading-right row '>
                    <span>View all</span>
                    <i className='fa-solid fa-caret-right'></i>
                </div>
            </div>
            <TopCart />
            </div>
        </section>
        </>
    )
}

export default TopCate
