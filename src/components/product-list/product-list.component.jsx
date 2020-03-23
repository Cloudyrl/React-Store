import React from "react";
import Product from "../product/product.component";
import "./product-list.styles.scss";

const ProductList = ({ title, products }) => {
  return (
    <div className="product-list">
      <h2 className="section-title">{title}</h2>
      <div className="products-center">
        {products.map(item => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
