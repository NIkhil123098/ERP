
import logo from "./logo.png"
import React, { useState,useEffect } from 'react';

import { Routes,Route} from "react-router-dom";
import Products from "./pages/Products";
import "./App.css";
import products_img from "./products_img.png";

import products from "./products.json";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";



var a="3";
function App()
{


  








  return(
<div>

  



  
    <Routes>
    <Route path='/products' element={<Products/>} />
    <Route path="" element={<Dashboard/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/orders" element={<Orders/>} />

    
  </Routes>
</div>


  );
}

export default App;


/*
<div>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
    */
