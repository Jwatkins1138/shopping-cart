import React, { useState, useEffect } from "react";

const MiniCart = (props) => {

  const drawItem = (item) => {
    return (
      <div key={item.name} className="side-item"><span>{item.name}</span><span>${item.price}</span></div>
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
    <aside className="side-bar">
      <div className="side-title"><h3>my cart</h3></div>
      <>
      {props.cartProps.items.length === 0 ?(
        <div className="side-item">your cart is currently empty</div>
      ) : (
        <>
        {props.cartProps.items.map((item) => {
          return drawItem(item);
        })}
        <div className="side-footer"><h4>total:</h4><span>${total}</span></div>
        </>
      )}
      </>
      
    </aside>
  )
}

export default MiniCart;