import React, { useContext } from "react";
import { ProductContext } from "../../context/product";
import Loading from "../../components/loading/loading.component";
import ProductList from "../../components/product-list/product-list.component";
import "./shop.styles.scss";

const Shop = () => {
  const { loading, products } = useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="shop-component">
      <ProductList title="our products" products={products} />
    </div>
  );
};

export default Shop;
