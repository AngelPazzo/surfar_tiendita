import React from "react";
import {useContext, useState} from "react";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import {getFirestore, collection, addDoc} from "firebase/firestore";



const Cart = () => {

    const { cartItems,  removeItem, clearCart, getTotal } = useContext(CartContext);
    const total = getTotal();

    const checkout = ()  =>{
        Swal.fire({
          icon: "info",
          title: "Complete el formulario, para proceder con la compra",
          html: `
          <input type="text" id="swal-input1" class="swal2-input" required placeholder="Nombre">
          <input type="text" id="swal-input2" class="swal2-input" required placeholder="Apellido">
          <input type="email" id="swal-input3" class="swal2-input" required placeholder="Correo">
          <input type="number" id="swal-input4" class="swal2-input" required placeholder="Teléfono">
          <input type="password" id="swal-input5" class="swal2-input" required placeholder="Contraseña">
          `,
          focusConfirm: true,
          confirmButtonText: "Confirmar",
          preConfirm: () => {
            return [
              document.getElementById("swal-input1").value,
              document.getElementById("swal-input2").value,
              document.getElementById("swal-input3").value,
              document.getElementById("swal-input4").value,
              document.getElementById("swal-input5").value,
            ];
          },
        }).then((result) => {
          if (result.value) {
            const [nombre, apellido, correo, password, telefono] = result.value;
            if (
              nombre === "" ||
              apellido === "" ||
              correo === "" ||
              password === "" ||
              telefono === ""
            ) {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor complete todos los campos",
                confirmButtonText: "Aceptar",
              });
            } else {
              const db = getFirestore();
              const orderCollection = collection(db, "orders");
              const usuario = {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                contrasena: password,
                telefono: telefono,
                total: total,
                items: cartItems,
                fecha: new Date(),
              };
              addDoc(orderCollection, usuario).then((res) => {
                Swal.fire({
                  icon: "success",
                  type: "success",
                  title: "Compra realizada con exito",
                  html: `<div>Muchas gracias por su compra <strong> ${usuario.nombre} ${usuario.apellido}.</strong></div>
                        <div>Su número de orden es: <strong>${res.id}</strong></div>
                        <div>Recibira un correo con los detalles y el seguimiento de su pedido</div>`,
                  confirmButtonText: "Aceptar",
                  preConfirm: () => {
                    clearCart();
                    window.location.href = "/";
                  },
                });
              });
            }
          }
        });
    }

   
    
    return (
        <>
        {cartItems.length === 0 ? (
            <>
            <h3>No hay productos en su carrito!</h3>
            <div >
            <Link to={"/"}>
            <button> Volver</button>
            </Link>
            </div>
        </>
        ) : (
            <>
        <div className="cart">
            

            <h2>Cart</h2>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item}
                    quantity = {item.item.quantity}
                    removeItem = {removeItem} />
                    
                ))}
            </div>
            <div className="cart-total">
                <span>Total: {total} U$S</span>
            </div>
            <div className="cart-buttons">
                <Link to="/">
                    <Button variant="outline-success">Continue Shopping</Button>
                </Link>
                <Button variant="outline-danger" onClick={clearCart}>
                    Clear Cart
                </Button>
                
                
                    
                    <Button variant="outline-success" onClick={checkout}>Checkout</Button>
                
            </div>
        </div>
        </>
        )}
        </>
    );
};
export default Cart;






 
// const buyItems = (e) => {
    //     e.preventDefault();
    //     const name = document.getElementById("name").value; 
    //     const address = document.getElementById("address").value;
    //     const email = document.getElementById("email").value;
        
    //     const db = getFirebase();
    //     const orderCollection = collection (db, "orders");
    //     const data = {
    //         name,
    //         address,
    //         email,
    //         cartItems,
    //         total
    //     }
    //     addDoc (orderCollection, data).then((res) => {
    //         console.log(res.id);
    //     }) 
    // }

