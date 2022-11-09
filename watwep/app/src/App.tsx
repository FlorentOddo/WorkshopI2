import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {SearchBar} from './searchbar/searchbar'
import {Product} from './product/product'
import {Cart} from './cart/cart'

function App() {
  return (
    <>
      <BrowserRouter>
      <SearchBar />
        <Routes>
          <Route path="/">
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
