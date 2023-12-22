import React from 'react'
import Ndata from './Ndata'

const Cart = () => {
    return (
        <>
        <div className="grid product">
            { Ndata.map( ( value, idx ) => (
                <div className="box" key={idx}>
                    <div className="image">
                        <img src={value.cover} alt="" />
                    </div>
                    <div className="details">
                        <h4>{ value.name }</h4>
                        <span>${ value.price }.00</span>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Cart
