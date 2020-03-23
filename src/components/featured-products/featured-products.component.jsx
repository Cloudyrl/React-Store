import React, { useContext } from "react";
import ProductList from "../product-list/product-list.component";
import { ProductContext } from "../../context/product";
import Loading from "../loading/loading.component";

const FeaturedProducts = () => {
  const { loading, featured } = useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }
  return <ProductList title="Featured" products={featured} />;
};

export default FeaturedProducts;
