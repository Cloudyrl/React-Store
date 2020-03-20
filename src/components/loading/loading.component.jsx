import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";
import './loading.styles.scss'

const styles = css`
  display: block;
  margin: 0 48%;
  border-color: red;
`;
 

const Loading = () => {
    return (
        <div className="loading">
            <h2>loading...</h2>
                <PacmanLoader 
                    css={styles}
                    size={35}
                    color={"#246bee"}
                />         
        </div>
    )
}

export default Loading