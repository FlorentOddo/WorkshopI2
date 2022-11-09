import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {SearchBar} from './searchbar/searchbar'
import {Product} from './product/product'

function App() {
  return (
    <>
      <BrowserRouter>
      <SearchBar />
        <Routes>
          <Route path="/">
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
