import React from "react";
import {useHistory} from 'react-router-dom'
import { Card} from "react-bootstrap";
import "./product.styles.scss";

const Product = ({ id, title, image, price }) => {
  const history = useHistory();

  const handleClick = () => {
      history.push(`product/${id}`);
  }

return (
  <div className="box" onClick={handleClick}>
    <Card style={{height: 320}}>
         <Card.Img variant="top" src={image.url} className="product-image"/>
         <Card.Body>
           <Card.Title>{title}</Card.Title>
           <Card.Text>${price}</Card.Text>
         </Card.Body>
      </Card>
  </div>
);
};

export default Product;
