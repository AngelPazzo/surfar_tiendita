
import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Cart from './components/Cart';
import { useState } from 'react';



function App() {
  const [setAmount, setAmountItems] = useState(0);
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element={<ItemListContainer /> }/>
    <Route path='/category/:name' element={<ItemListContainer /> }/>
    <Route path='/item/:id' element={<ItemDetailContainer /> }/>
    <Route path='/cart'  element={<Cart /> }/>
    <Route
             path="*"
             element={
               <div style={{ backgroundColor: "red"  }}>ERROR 404 NOT FOUND</div>
             }
           />
           
    </Routes>
    
    
    </BrowserRouter>
    </>
  );
}

export default App;









