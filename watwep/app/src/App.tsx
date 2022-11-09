import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {SearchBar} from './searchbar/searchbar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
