import React from "react";
import { Link } from "react-router-dom";

import "./home-image.styles.scss";

const HomeImage = () => {
  return (
    <div className="image-container">
      <div className="banner"></div>
      <div className="content">
        <h6>Shop with us!</h6>
        <Link to="/shop" className="products-btn">
        Products
      </Link>
      </div>
    </div>
  );
};

export default HomeImage;
