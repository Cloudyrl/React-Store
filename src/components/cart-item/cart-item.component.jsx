import React from "react";
import {FaAngleUp,FaAngleDown} from 'react-icons/fa'
import "./cart-item.styles.scss";

const CartItem = ({id,title,price,image,amount}) => {
  return <div className="cart-item">
    <img src={image} alt={title}/>
    <div className="title-container">
      <h4>{title}</h4>
      <h4>${price}</h4>
      <button className="cart-btn remove-btn">
        remove
      </button>
    </div>
    <div className="actions-container">
      <button type="button" className="cart-btn amount-button">
        <FaAngleUp/>
      </button>
      <h4>{amount}</h4>
      <button type="button" className="cart-btn amount-button">
        <FaAngleDown/>
      </button>
    </div>
  </div>;
};

export default CartItem;
