import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./../../context/user";
import { CartContext } from "./../../context/cart";
import submitOrder from '../../strapi/submitOrder'
import EmptyCart from "./../../components/empty-cart/empty-cart.component";
import { Form, Button } from "react-bootstrap";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import "./checkout.styles.scss";

const Checkout = (props) => {
  const history = useHistory();
  const { user, alert, showAlert, hideAlert } = useContext(UserContext);
  const { cart, total, clearCart } = useContext(CartContext);
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const isEmpty = !name || alert.show;

  const handleSubmit = async (e) => {
    e.preventDefault();
    showAlert({msg:"submitting order... please wait"})
    try{
      const cardElement = elements.getElement(CardElement);
      const response = await stripe.createToken(cardElement);
      const {token} = response
      if(token){
        setError('')
        const {id} = token;
        let order = await submitOrder({name,total,items:cart,stripeToken:id,userToken:user.token})
        if(order){
          showAlert({msg:'your order is complete'});
          clearCart();
          history.push('/');
          return;
        }else{
          showAlert({msg:'there was an error trying to submit your order. please try again!',type:'danger'})
        }
      }else{
        hideAlert()
        setError(response.error.message)
      }
    }catch(error){
      console.log(error) 
    }
  };

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
        <CardElement />
        {error && <p className="empty error">{error}</p>}
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
