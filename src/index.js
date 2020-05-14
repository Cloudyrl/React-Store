import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ProductProvider from "./context/product";
import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "bootstrap/dist/css/bootstrap.min.css";

const stripePromise = loadStripe('pk_test_OMQXGO8SGFABJ7nfm7GlLMjt009VmTPCfC');

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </Elements>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
