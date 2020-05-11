import React, { useContext } from "react";
import { ProductContext } from "../../context/product";
import { CartContext } from "../../context/cart";
import { useParams, Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Loading from "../../components/loading/loading.component";
import "./product-detail.styles.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductContext);
  const {addToCart} = useContext(CartContext)
  const product = products.find((product) => product.id === parseInt(id));

  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image: { url },
      title,
      price,
      description,
    } = product;
    return (
      <section className="single-product">
        <img src={url} alt="product-image" className="single-product-image" />
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
            <Button className="btn-primary" onClick={()=>{
              addToCart(product)
              history.push("/cart")
            }} block>
              Add to Cart
            </Button>
        </article>
      </section>
    );
  }
};

export default ProductDetail;
