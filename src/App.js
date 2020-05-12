import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//pages
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";
import Cart from "./pages/cart/cart.component";
import Checkout from "./pages/checkout/checkout.component";
import Error from "./pages/error/error.component";
import Login from "./pages/login/login.component";
import ProductDetail from "./pages/product-detail/product-detail.component";
import Shop from "./pages/shop/shop.component";
import Alert from "./components/alert/alert.component";
import { UserContext } from "./context/user";

//components
import Header from "./components/header/header.component";

//styles
import "./App.css";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          {user.token ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/product/:id" children={<ProductDetail />}></Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          {user.token ? <Checkout /> : <Redirect to="/login" />}
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
