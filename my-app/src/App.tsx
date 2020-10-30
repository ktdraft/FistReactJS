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
          title={"Smart Phone"}
          action={"Add to cart"}
          type={"phone"} />
        <Home
          title={"Device"}
          action={"Add to cart"}
          type={"device"} />
        <Home
          title={"Laptop"}
          action={"Add to cart"}
          type={"laptop"} />
      </Route>

      <Route path="/admin/" exact>
        <Home
          title={"Smart phone"}
          action={"Edit this product"}
          type={"phone"} />
          
        <Home
          title={"Device"}
          action={"Edit this product"}
          type={"device"} />
        <Home
          title={"Laptop"}
          action={"Edit this product"}
          type={"laptop"} />
      </Route>

      <Route path="/cart/">
        <CartInfomation />
      </Route>

      <Footer></Footer>
    </Router>

  );
}

export default App;
