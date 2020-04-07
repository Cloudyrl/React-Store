import React, { useContext } from "react";
import { ProductContext } from "../../context/product";
import { useParams, useHistory } from "react-router-dom";
import Loading from "../../components/loading/loading.component";
import './product-detail.styles.scss'

const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products, loading } = useContext(ProductContext);
  const product = products.find(product => product.id === parseInt(id));

  if (products.length ===0) {
    return <Loading />;
  } else {
    const {
      image: {url},
      title,
      price,
      description
    } = product;
    return (
      <section className="single-product">
        <img src={url} alt="product-image" className="single-product-image"/>
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
        </article>
      </section>
    );
  }
};

export default ProductDetail;
