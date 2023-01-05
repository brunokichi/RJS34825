import React, { useContext, useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  doc,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import Saludo from "../Saludo/Saludo";

import Form from "../Form/Form";

import CartList from "../CartList/CartList";

const Cart = () => {

  const db = getFirestore();

  const { cart, cartCosto, clearCart } = useContext(CartContext);

  const [id, setId] = useState();

  const [email, setEmail] = useState();

  const [clienteExistente, setClienteExistente] = useState({
    id: "",
  });

  useEffect(() => {
    if (clienteExistente.id !== "") {
      const clienteUpd = doc(db, "clientes", clienteExistente[0].id);
      getDoc(clienteUpd).then(() => {
        updateDoc(clienteUpd, {
          nombre: clienteExistente[0].nombre,
          email: clienteExistente[0].email,
          telefono: clienteExistente[0].telefono,
        });
      });
    }
  }, [clienteExistente]);

  const GeneraCompra = (key) => {
    const baseClientes = collection(db, "clientes");

    const baseCompras = collection(db, "compras");

    var date = new Date();
    var fecha = date.toLocaleString();

    const q = query(baseClientes, where("email", "==", key.email));
    getDocs(q).then((snapshot) => {
      if (snapshot.docs.length > 0) {
        setClienteExistente(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            email: key.email,
            nombre: key.nombre,
            telefono: key.telefono,
          }))
        );
      } else {
        addDoc(baseClientes, {
          email: key.email,
          nombre: key.nombre,
          telefono: key.telefono,
        });
      }
    });

    const compra = cart.map((item) => ({
      id: item.id,
      titulo: item.titulo,
      precio: item.precio,
      cantidad: item.cantidad,
    }));

    const datosCompra = {
      comprador: key,
      pedido: compra,
      costo: cartCosto,
      fecha: fecha,
    };

    addDoc(baseCompras, datosCompra).then((snapshot) => {
      setId(snapshot.id);
      setEmail(key.email);
      clearCart();
    });
  };

  return (
    <>
      <div className="container-fluid p-3 bkg_transp justify-content-center">
        <Saludo greeting={"Carrito de compras"} />

        <div>
          {typeof id !== "undefined" ? (
            <div className="container-fluid p-3 popp_m">
              <p>Orden de compra generada de manera exitosa</p>
              <p>Código de orden: {id}</p>
              <p>
                En instantes le llegará un mail a {email} con la confirmación de
                la solicitud y un link para generar el pago
              </p>
              <p>Muchas gracias!</p>
              <NavLink to={"/item"}>
            <button
              type="button"
              className="btn btn-primary btn-sm mb-1 mt-1 ps-1 pe-1"
            >
              Volver al inicio
            </button>
          </NavLink>
            </div>
          ) : (
            <>
              <CartList items={cart} />
              {cart.length > 0 && <Form onChange={GeneraCompra} />}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
