import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../utils/urls";
import { featureProducts } from "../utils/helpers";

export const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setfeatured] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(`${url}/products`);
      const featured = featureProducts(response.data);
      setfeatured(featured);
      setProducts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
