import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Slide from './components/Slide';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './components/Home';
import CartInfomation from './components/CartInfomation';


function App() {
  return (
    <Router>

      <Header></Header>
      <Slide></Slide>

      {/* <Admin_Section></Admin_Section>
      <Admin_Section></Admin_Section>
      <Admin_Section></Admin_Section> */}

      {/* <Cart_Section></Cart_Section> */}

      <Route path="/" exact>
        <Home
          title={"Smart phone"}
          action={"Add to cart"} />
        <Home
          title={"XXXX"}
          action={"Add to cart"} />
        <Home
          title={"Laptop"}
          action={"Add to cart"} />
      </Route>

      <Route path="/admin/" exact>
      <Home
          title={"Smart phone"}
          action={"Edit this product"} />
        <Home
          title={"XXXX"}
          action={"Edit this product"} />
        <Home
          title={"Laptop"}
          action={"Edit this product"} />
      </Route>

      <Route path="/cart/">
        <CartInfomation />
      </Route>

      <Footer></Footer>
    </Router>

  );
}

export default App;
