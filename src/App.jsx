import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import About from "./AboutUs.jsx";
import Home from "./Home.jsx"
import Calculator from "./Calculator.jsx"
import Layout from './layout.jsx';

export function Component(){
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [dataArray, setDataArray] = useState([])
  const nameChange = (event) => {
    setName(event.target.value);
  };
  const priceChange = (event) => {
    setPrice(event.target.value)
  }
  const addToArray = () => {
    if (name.trim() !== '' && price.trim() !== '') {
      setDataArray((prevArray) => [
        ...prevArray,
        { name: name.trim(), price: price.trim() }
      ]);
      setName('');
      setPrice('');
    }
  }
  return(
    <div className="item"> 
      <hr />
        <label htmlFor="pro-n"> Product name: <br />
        <input id="pro-n" value={name} type="text" placeholder="Enter product name" onChange={nameChange} />
        </label><br />
        <label htmlFor="">Product price:  <br />
          <input type="text" placeholder="Enter product price" onChange={priceChange} value={price}/>
        </label> <br />
        <button type="submit" onClick={addToArray}>Name</button>
        <hr />
        <ul>
          {dataArray.map((item, index) => (
          <li key={index}>
            <img src="{item.img}" alt="" />
            Имя: {item.name} <br /> Цена: {item.price} sum
          </li>
          ))}
        </ul>
    </div>
  )
}

function App() {
  return(
    <div>
      <h1>router</h1>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='Home' index element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Calculator' element={<Calculator/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
  root.render(
    App()
    
  );
  
  root2.render(
    App(),
    Component()
  )
  export default App;