import { Link } from 'react-router-dom';
import {LOGO_URL, CART_LOGO} from '../utils/content.js';
import { useState } from 'react';


const Header =()=>{
   const [btn, setbtn]=useState("Login");
    return(
     <div className="header">
         <div className="logo-container">
             <img className="logo" src={LOGO_URL}/>
         </div>
         <div className="nav-items">
         <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About Us</Link></li>
             <li><Link to="/contact">Contact Us</Link></li>
             <button className="login" onClick={()=> btn==="Login"?setbtn("Logout"):setbtn("Login")}>{btn}</button>
             <li ><img className="cart" src={CART_LOGO} /></li>
         </ul>
         </div>
     </div>
    );
 };

 export default Header;