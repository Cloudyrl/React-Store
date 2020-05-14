import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";
import "./loading.styles.scss";

const styles = css`
  display: block;
  margin: 0 48%;
  border-color: red;
`;

const Loading = () => {
  return (
    <div className="loading">
      <PacmanLoader css={styles} size={70} color={"#6C63FF"} />
    </div>
  );
};

export default Loading;
