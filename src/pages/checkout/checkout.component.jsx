import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./../../context/user";
import { CartContext } from "./../../context/cart";
import EmptyCart from "./../../components/empty-cart/empty-cart.component";
import { Form, Button } from "react-bootstrap";

import "./checkout.styles.scss";

const Checkout = (props) => {
  const history = useHistory();
  const { user, aler, showAlert, hideAlert } = useContext(UserContext);
  const { cart, total, clearCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const isEmpty = !name || alert.show;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(cart);
  if (cart.length < 1) {
    return <EmptyCart />;
  } else {
    return (
      <div className="checkout-container">
        <h1>Checkout</h1>
        <h3>
          Order total: <span>${total}</span>
        </h3>
        <Form>
          <Form.Group controlId="Email">
            <label>Name</label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Form>
        <div className="stripe-form">
          <p className="info">
            Test using this credit card: <span>4242 4242 4242 4242</span>
            <br />
            enter any 5 digits for the zip code
            <br />
            enter any 3 digits for the CVC
          </p>
        </div>
        {error && <p className="empty">{error}</p>}
        {isEmpty ? (
          <p className="empty">Please fill out all fields</p>
        ) : (
          <Button
            className="btn-primary"
            type="submit"
            onClick={handleSubmit}
            block
          >
            Submit
          </Button>
        )}
      </div>
    );
  }
};

export default Checkout;
