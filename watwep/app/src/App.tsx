import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {SearchBar} from './searchbar/searchbar'
import {Product} from './product/product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<SearchBar />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
