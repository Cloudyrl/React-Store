import React, { useContext } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from "../../context/cart";
import "./cart-item.styles.scss";

const CartItem = ({ id, title, price, image, amount }) => {
  const { removeItem, increaseAmount, decreaseAmount } = useContext(
    CartContext
  );

  return (
    <div className="cart-item">
      <img src={image} alt={title} />
      <div className="title-container">
        <h4>{title}</h4>
        <h4>${price}</h4>
        <button className="cart-btn remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div className="actions-container">
        <button
          type="button"
          className="cart-btn amount-button"
          onClick={() => increaseAmount(id)}
        >
          <FaAngleUp />
        </button>
        <h4>{amount}</h4>
        <button
          type="button"
          className="cart-btn amount-button"
          onClick={() => decreaseAmount(id, amount)}
        >
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
