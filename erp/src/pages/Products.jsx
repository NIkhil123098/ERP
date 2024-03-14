import React, { useState,useEffect } from 'react';
import "../App.css";
import logo from "../logo.png"

import products from "../products.json";
function Products()
{

  //all usestates
    const [items, setItems] = useState([]);
    const [inputId, setInputId] = useState('');
    const [inputText, setInputText] = useState('');
    const [inputCategory, setInputCategory] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [inputQuantity, setInputQuantity] = useState('');

    
    


//input change functions
  const handleInputChange1 = (event) => {
    setInputId(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputText(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setInputCategory(event.target.value);
  };
  const handleInputChange4 = (event) => {
    setInputPrice(event.target.value);
  };
  const handleInputChange5 = (event) => {
    setInputQuantity(event.target.value);
  };



  //inline css stylings
    const widthStyle = {width: '50px'}
    const paddingStyle = {padding: '20px'}
    const trStyle = {backgroundColor: 'aliceblue'}
    

  useEffect(() => {
    setItems(products);
  }, []);

  

  //react routes redirect actions
  const redirectToDashboard = () => {
    window.location.href = '/dashboard';
  };
  const redirectToOrders = () => {
    window.location.href = '/orders';
  };



  //functions

  //delete item
  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };


  //additem
  const addItem = (itemId, newName, newCategory,newPrice,newQuantity) => {

    const newItem = { id: itemId, name: newName,category:newCategory,price:newPrice,stock:newQuantity };
    const updatedData = [...items,newItem]
    setItems(updatedData);
  };



  //edititem
  const editItem = (itemId) => {

    const index = items.findIndex(item => item.id === itemId);

    setInputId(items[index].id);
    setInputText(items[index].name);
    setInputCategory(items[index].category);
    setInputPrice(items[index].price);
    setInputQuantity(items[index].stock);
    
  };


//updateitem
  const updateItem = (itemId, newName, newCategory,newPrice,newQuantity) => {



    const index = items.findIndex(item => item.id === itemId);

    const updatedData = [ ...items ];
    

    if (index !== -1) {
      updatedData[index].name = newName;
      updatedData[index].price = newPrice;
      updatedData[index].category = newCategory;
      updatedData[index].id = itemId;
      updatedData[index].quantity = newQuantity;
      

      setItems(updatedData);
    }
    else
    {
addItem(itemId, newName, newCategory,newPrice,newQuantity);
    }
  };




    return(
        
        <div>
             
 <div className="header_design">

<img src={logo} className="he1"/>
<font className="he2" color="black" onClick={redirectToDashboard}>Dashboard</font>
<font className="he3" color="blue">Products</font>
<font className="he4" color="black" onClick={redirectToOrders}>Orders</font>










</div>

<div className="products_div3">
            
<h1>Products </h1>

<table>
        <thead>
          <tr>
            <th style={trStyle}>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Edit / Delete Product</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td style={paddingStyle}><span onClick={() => editItem(item.id)} className='upd'>Edit</span>   &nbsp;&nbsp; &nbsp; &nbsp;   <span onClick={() => deleteItem(item.id)} className='table_div'>Delete</span></td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <h2>Add / Update</h2>
      <input type="text" placeholder="ID" className="et1" style={widthStyle} value={inputId} onChange={handleInputChange1}/>
      &nbsp;&nbsp;&nbsp;
      <input type="text" placeholder="Name" className="et1" value={inputText} onChange={handleInputChange2}/>
      &nbsp;&nbsp;&nbsp;
      <input type="text" placeholder="Category" className="et1" value={inputCategory} onChange={handleInputChange3}/>
      &nbsp;&nbsp;&nbsp;
      <input type="text" placeholder="Price" className="et1" value={inputPrice} onChange={handleInputChange4}/>
      &nbsp;&nbsp;&nbsp;
      <input type="text" placeholder="Stock Quantity" className="et1" value={inputQuantity} onChange={handleInputChange5}/>



      <br></br>
      <br></br>

      <div onClick={() => updateItem(inputId,inputText,inputCategory,inputPrice,inputQuantity)} className="upd">Add / Update</div>

</div>

        </div>
    )
}

export default Products;




/*
import React from "react";
function Products()
{
    return(
        <div>

        </div>
    )
}

export default Products;
*/