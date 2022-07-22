// import "./App.css";
// import React from "react";
// import NavBar from "./components/NavBar";
// import ItemListContainer from "./components/ItemListContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />
//         <div>
//           <link to={"category/Traje"}>Traje</link>
//           <link to={"category/Table"}>Tablas</link>
//           <link to={"category/Botas"}>Botas</link>
//         </div>
//         <Routes>
//           <Route index element={<ItemListContainer />} />
//           <Route path="/category" element={<ItemListContainer />} />
//           <Route path="/item/:id" element={<ItemDetailContainer />} />

//           <Route
//             path="*"
//             element={
//               <div style={{ backgroundColor: "red" }}>ERRPR 404 NOT FOUND</div>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;






import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import Cart from './components/cart/Cart';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element={<ItemListContainer /> }/>
    <Route path='/category/:name' element={<ItemListContainer /> }/>
    <Route path='/item/:id' element={<ItemDetailContainer /> }/>
    {/* <Route path='/cart' element={<Cart /> }/> */}
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









