import React from "react";
import { Link } from "react-router-dom";

import "./home-image.styles.scss";

const HomeImage = () => {
  return (
    <div className="image-container">
      <div className="banner">
        <h6>Shop with us!</h6>
      </div>
      <Link to="/shop" className="products-btn">
        Products
      </Link>
    </div>
  );
};

export default HomeImage;
