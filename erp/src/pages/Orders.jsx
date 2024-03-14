import "../App.css";
import logo from "../logo.png"
import React, { useState,useEffect } from 'react';
import orders from "../orders.json";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";



function Orders()
{

//usestates
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOrder, setSelectedOrder] = useState({});
    const [date, changeDate] = useState(new Date());
    const [items, setItems] = useState([]);
    const [originalItems, setOriginalItems] = useState([]);




    useEffect(() => {
      setItems(orders);
      setOriginalItems(orders);

    }, []);

 

//inline css stylings
    const widthStyle = {width: '50px'}
    const paddingStyle = {padding: '20px'}
    const trStyle = {backgroundColor: 'bisque'}
    const grayStyle = {color: 'lightgray'}
    const orangeStyle = {backgroundColor: 'chocolate'}


   


//modal open and closing when clicking view order
    const openModal = (itemId) => {
        setIsOpen(true);
        const index = items.findIndex(item => item.id === itemId);

        setSelectedOrder(items[index]);

        
      };
    
      const closeModal = () => {
        setIsOpen(false);
      };





//redirect to particular url when clicking
    const redirectToDashboard = () => {
        window.location.href = '/dashboard';
      };
      const redirectToProducts = () => {
        window.location.href = '/products';
      };


      
    





//functions

//delete item
      const deleteItem = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
      };



//select delivery status change actions
      const handleSelectChange = (itemId) => (event) => {
        setSelectedOption(event.target.value);
        const index = items.findIndex(item => item.id === itemId);
        items[index].status=event.target.value;
      };







      
      
// table filter according to delivery date due


      function changeValue(val) {
        
      

        changeDate(val);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const dateString = val.toLocaleDateString(undefined, options); 

        const targetDate = new Date(dateString);
        
        const newItems = originalItems.filter((item) => new Date(item.deliverydate).getTime() == targetDate.getTime() );
        setItems(newItems);

     }








    return(
<div>
<div className="header_design">

<img src={logo} className="he1"/>
<font className="he2" color="black" onClick={redirectToDashboard}>Dashboard</font>
<font className="he3" color="black" onClick={redirectToProducts}>Products</font>
<font className="he4" color="blue">Orders</font>










</div>


<div className="products_div3">
  <br></br>
            <b>Filter By Delivery Date : </b>
            <Calendar onChange = {changeValue} value = {date} />
<h1>Orders </h1>







<table>
        <thead>
          <tr>
            <th style={trStyle}>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Expected Delivery</th>
            <th>View / Delete Order</th>
          </tr>
        </thead>
        <tbody>
          {
          items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td><select className="select_view" value={item.status} onChange={handleSelectChange(item.id)}><option value="Ordered">Ordered</option><option value="Shipped">Shipped</option><option value="Dispached">Dispached</option><option value="Delivered">Delivered</option></select></td>
              <td>{item.deliverydate}</td>
              
              <td style={paddingStyle}><span className='upd' onClick={()=>openModal(item.id)}>View</span>   &nbsp;&nbsp;   <span onClick={() => deleteItem(item.id)} className='table_div' style={orangeStyle}>Delete</span></td>
              
            </tr>
          ))}
        </tbody>

        </table>
<br></br>
        

        {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>x</button>
            <h2>Order Details</h2>
            <span style={grayStyle}>Order Id : </span><span>#{selectedOrder.id}</span>
            <br></br>
            <span style={grayStyle}>Customer Name : </span><span>{selectedOrder.name}</span>
            <br></br>
            <span style={grayStyle}>Product Name : </span><span>{selectedOrder.product}</span>
            <br></br>
            <span style={grayStyle}>Price : </span><span>{selectedOrder.price}</span>
            <br></br>

            <span style={grayStyle}>Quantity : </span><span>{selectedOrder.stock}</span>
            <br></br>
            <span style={grayStyle}>Address : </span><span>{selectedOrder.address}</span>
            <br></br>
            <span style={grayStyle}>Contact details : </span><span>{selectedOrder.contact}</span>
          </div>
        </div>
      )}
        </div>

</div>
    );
}

export default Orders