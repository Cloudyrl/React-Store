import React, { useContext } from "react";
import ProductList from "../product-list/product-list.component";
import { ProductContext } from "../../context/product";
import Loading from "../loading/loading.component";
import './featured-products.styles.scss'

const FeaturedProducts = () => {
  const { loading, featured } = useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }
  return <div className="featured-products">
    <ProductList title="Featured" products={featured} />;
    </div>
};

export default FeaturedProducts;
