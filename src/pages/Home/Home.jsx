import React from 'react';
import Header from "../../components/Header"
import MainContainer from "../../components/MainContainer"
import About from "../../components/About"
import Products from "../../components/Products"
import Contact from "../../components/Contact"
import "./styles.css"

export default function Home() {
  return (
    <div>
      <Header />
      <MainContainer />
      <About />
      <Products />
      <Contact />
    </div>
  );
}
