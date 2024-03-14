import React, { useState,useEffect } from 'react';
import logo from "../logo.png"
import products_img from "../products_img.png";
import orders_img from "../orders_img.png"
import "../App.css";
import products from "../products.json";
function Dashboard()
{


    const redirectToProducts = () => {
        window.location.href = '/products';
      };

      const redirectToOrders = () => {
        window.location.href = '/orders';
      };

      

    
    
    return(
        <div>
 <div class="header_design">

<img src={logo} class="he1"/>
<font class="he2" color="blue">Dashboard</font>
<font class="he3" color="black" onClick={redirectToProducts}>Products</font>
<font class="he4" color="black" onClick={redirectToOrders}>Orders</font>










</div>

<div class="products_div">
<h2>
  Products
</h2>



<p class="products_p"> Household essentials encompass a variety of products that are essential for maintaining a clean, organized, and functional home. These items can be conveniently ordered online and delivered to your doorstep through grocery delivery services. Here are some common household items available for delivery</p>
<img src={products_img} class="products_im"/>

<div class="products_div2">
<a href="/products">View Products </a>
</div>
<b class="products_span">Total Stocks Available : 3</b>






</div>



<div class="orders_div">
<h2>
  Orders
</h2>



<p class="products_p"> Household essentials encompass a variety of products that are essential for maintaining a clean, organized, and functional home. These items can be conveniently ordered online and delivered to your doorstep through grocery delivery services. Here are some common household items available for delivery</p>
<img src={orders_img} class="products_im"/>

<div class="orders_div2">
<a href="/orders">View Orders </a>
</div>
<b class="orders_span">No of Orders : 4</b>






</div>











        </div>
    )
}

export default Dashboard