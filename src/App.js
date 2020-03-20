import React from 'react';
import {Switch,Route} from 'react-router-dom'

//pages
import Home from './pages/home/home.component'
import About from './pages/about/about.component'
import Cart from './pages/cart/cart.component'
import Checkout from './pages/checkout/checkout.component'
import Error from './pages/error/error.component'
import Login from './pages/login/login.component'
import ProductDetail from './pages/product-detail/product-detail.component'
import Shop from './pages/shop/shop.component'

//components
import Header from './components/header/header.component'

//styles
import './App.css';

function App() {
  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route 
          path="/products/:id"
          children={<ProductDetail/>}
          >  
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
