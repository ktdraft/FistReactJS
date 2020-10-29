import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';
import Section from './components/Section';
import Slide from './components/Slide';
import Cart_Section from './components/Cart_Section';
import Admin_Section from './components/Admin_Section';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slide></Slide>

      {/* <Admin_Section></Admin_Section>
      <Admin_Section></Admin_Section>
      <Admin_Section></Admin_Section> */}
      <Cart_Section></Cart_Section>
      {/* <Section></Section>
      <Section></Section>
      <Section></Section> */}


      <Footer></Footer>
    </div>
  );
}

export default App;
