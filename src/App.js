
import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Cart from './components/Cart';
import { useState } from 'react';
import { CartContext } from './components/CartContext';
import CartContextProvider from './components/CartContext';
import Registro from './components/Registro';



function App() {
  const [setAmount, setAmountItems] = useState(0);
  return (
    <>
      <CartContextProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element={<ItemListContainer /> }/>
    <Route path='/category/:name' element={<ItemListContainer /> }/>
    <Route path='/item/:id' element={<ItemDetailContainer /> }/>
    <Route path='/contact' element={<Registro /> }/>
    <Route path='/cart'  element={<Cart /> }/>
    <Route
             path="*"
             element={
               <div style={{ backgroundColor: "red"  }}>ERROR 404 NOT FOUND</div>
             }
           />
           
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;









