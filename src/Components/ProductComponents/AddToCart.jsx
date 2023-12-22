import React from 'react'

const AddToCart = ({addToCart , className}) => {
    return (
        <>
            <button className={className? className : ''} onClick={() => {
                return addToCart()}}>
            <i className="fa fa-plus"></i>
            </button>
        </>
    );
}
export default AddToCart
