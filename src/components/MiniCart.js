import React, { useState } from "react";

const MiniCart = (props) => {


  return (
    <aside className="side-bar">
      <div className="side-title"><h3>my cart</h3></div>
      <div className="side-item">your cart is currently empty</div>
      <div className="side-item">{props.cartProps.items.length}</div>
    </aside>
  )
}

export default MiniCart;