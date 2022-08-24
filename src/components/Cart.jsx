import React from "react";
import {useContext, useState} from "react";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import "./cart.css"



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
            <h3 className="text-center ">No hay productos en su carrito!</h3>
            <div className="text-center">
            <Link to={"/"}>
            <Button className="botonCart " variant="success" > Volver</Button>
            </Link>
            </div>
        </>
        ) : (
            <>
        <div className="cart">
            

            <h2 className="text-center ">Sus productos</h2>
            <div >
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item}
                    quantity = {item.item.quantity}
                    removeItem = {removeItem} />
                    
                ))}
            </div>
            <div className="d-flex justify-content-center ">
                <span>Total: {total} U$S</span>
            </div>
            <div className="d-flex justify-content-center ">
                <Link to="/">
                    <Button className="botonCart" variant="success">Seguir comprando</Button>
                </Link>
                <Button className="botonCart" variant="danger" onClick={clearCart}>
                    Vaciar carrito
                </Button>
                
                
                    
                    <Button className="botonCart" variant="dark" onClick={checkout}>Finalizar compra</Button>
                
            </div>
        </div>
        </>
        )}
        </>
    );
};
export default Cart;







