import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About'
// import ProductProvider from './components/products/Productprovider';
import Navbar from './components/navbar/Navbar'
import Login from './components/login/Login';
import ProductItem from './components/products/ProductItem';
import Card from './components/card/Card';
import Product from './components/products/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/logIn' element={<Login/>}></Route>
        <Route path='/products/:id' element={<ProductItem/>}></Route>
        <Route path='/products/card' element={<Card/>}></Route>
      </Routes>
    </div>
  );
}

export default App