import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';


const pron = document.getElementById('pro-n')
const h2 = document.getElementById('h2')
// function GetProduct(price) {
//   let Price;
//   let Name;
//   let Image;
//   let Description;
//   let Characteristic;
//   export function pricep(price) {
    
//   }
//   export function namep(name) {
//     Name = pron.value;
//     h2.value = Name
//   }
//   export function imagep(image) {
    
//   }
//   export function descriptionp(descript) {
    
//   }
//   export function characterp(character) {
    
//   }
// }
// function items(){
//   return(
//     <div className="item">
//       <img src="{image}" alt="" className="img" />
//       <h2 className="h2">{product.name}</h2>
//       <h3 className="h3">{product.price}</h3>
//     </div>
//   )
// }
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Blogs</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
      </nav>
      
      
        <script src=""></script>
      <Outlet />
    </>
  )
};
export default Layout;

