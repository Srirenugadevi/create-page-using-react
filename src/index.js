import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/header';
import Content from "./components/content";
import Footer from './components/footer';
const Welcome=(
  <div>
      <Header/>
      <Content/>
      <Footer/>
  </div>
);

ReactDOM.render(Welcome,document.getElementById("root"));

