import React, { useContext } from "react";
import { CartContext } from "../../context/cart";
import EmptyCart from "../../components/empty-cart/empty-cart.component";
import CartItem from "../../components/cart-item/cart-item.component";
import {Button} from "react-bootstrap"
import "./cart.styles.scss";

const Cart = () => {
  let user = false;

  const { cart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.map((product) => {
        return <CartItem key={product.id} {...product}></CartItem>;
      })}
      <h2>Total: ${total}</h2>
      {user ? (
        <Button  variant="primary" block>
          Checkout
        </Button>
      ) : (
        <Button  variant="primary" block>
          Login
        </Button>
      )}
    </div>
  );
};

export default Cart;
