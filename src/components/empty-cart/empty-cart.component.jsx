import React from "react";
import {useHistory} from  'react-router-dom'
import { Button } from "react-bootstrap";
import "./empty-cart.styles.scss";


const EmptyCart = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/shop')
    }

  return (
    <section className="empty-cart section">
      <h1>The cart is empty</h1>
      <Button className="btn-primary" onClick={handleClick}>Let's add some products</Button>
    </section>
  );
};

export default EmptyCart;
