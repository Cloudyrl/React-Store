import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./home-image.styles.scss";

const HomeImage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/shop");
  };

  return (
    <div className="image-container">
      <div className="banner">
        <h6>Shop with us!</h6>
      </div>
      <Button
        className="products-button"
        variant="primary"
        size="lg"
        onClick={handleClick}
      >
        Products
      </Button>
    </div>
  );
};

export default HomeImage;
