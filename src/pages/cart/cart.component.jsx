import React, { useContext } from "react";
import {useHistory} from "react-router-dom";
import { CartContext } from "../../context/cart";
import { UserContext } from "../../context/user";
import EmptyCart from "../../components/empty-cart/empty-cart.component";
import CartItem from "../../components/cart-item/cart-item.component";
import {Button} from "react-bootstrap"
import "./cart.styles.scss";

const Cart = () => {
  const { cart, total } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const history = useHistory();

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
      {user.token ? (
        <Button onClick={()=>{history.push("/checkout")}} className="btn-primary" block>
          Checkout
        </Button>
      ) : (
        <Button className="btn-primary" onClick={()=>{history.push("/login")}} block>
          Login
        </Button>
      )}
    </div>
  );
};

export default Cart;
