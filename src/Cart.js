import React, { useState, useEffect } from "react";

const Cart = (props) => {

  const drawItem = (item) => {
    return (
      <div key={item.name} className="cart-item">
        <div className="cart-card">
          <h4>{item.name}</h4>
          <div className="cart-image"><img className="item-image" src={item.img} alt="product" /></div>
        </div>
        <div className="cart-body">
          <button onClick={props.cartProps.remove(item)} className="minus"></button>
          <strong>${item.price}</strong>
        </div>   
      </div>
    )
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tempTotal = 0;
    props.cartProps.items.forEach((item) => {
      tempTotal += item.price;
    })
    setTotal(tempTotal.toFixed(2));
  }, [props])
  return (
    <main>
      <h2 className="shop-title">cart</h2>
      <div className="cart">
      <>
      {props.cartProps.items.length === 0 ?(
        <div className="cart-item">your cart is currently empty</div>
      ) : (
        <>
        {props.cartProps.items.map((item) => {
          return drawItem(item);
        })}
        <div className="cart-footer"><h4>total:</h4><strong>${total}</strong></div>
        </>
      )}
      </>

      </div>
    </main>  
  )
}

export default Cart;