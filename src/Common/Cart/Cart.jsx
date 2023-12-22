import React from "react";
import "./cart.css";
import AddToCart from "../../Components/ProductComponents/AddToCart";

const Cart = ({ cartItem, addToCart, decreaseQty, removePro }) => {
  const totalPrice = cartItem.length
    ? cartItem.reduce((prevPrice, item) => prevPrice + item.price * item.qty, 0)
    : 0;
  console.log(totalPrice);
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartItem.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}
            {cartItem.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="image">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart" onClick={()=>removePro(item)}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="cartControl d_flex">
                      <AddToCart
                        className={"incCart"}
                        addToCart={() => addToCart(item)}
                      />
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>
          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className="d_flex">
              <h4>Total Price : </h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
