import React, { useContext, useState, useEffect } from "react";

import { getFirestore, collection, addDoc, query, where, doc, getDocs, getDoc, updateDoc } from "firebase/firestore";

import { NavLink } from "react-router-dom";

import CartItem from "../CartItem/CartItem";

import Form from "../Form/Form";

import { CartContext } from "../../context/CartContext";

const CartList = ({ items }) => {

  const db = getFirestore();

  const { cart, cartCant, cartCosto, clearCart } = useContext(CartContext);

  const [id, setId] = useState();

  const [email, setEmail] = useState();

  const [clienteExistente, setClienteExistente] = useState({
    id: '',
  });

  useEffect(() => {
    const dbb = getFirestore();
    if (clienteExistente.id !== '') {
      const clienteUpd = doc(dbb, "clientes", clienteExistente[0].id);
      getDoc(clienteUpd).then(() => {
          updateDoc(clienteUpd, {
            nombre: clienteExistente[0].nombre, 
            email: clienteExistente[0].email,
            telefono: clienteExistente[0].telefono
          });
      })}
  }, [clienteExistente]);

  const GeneraCompra = (key) => {

    const baseClientes = collection(db, "clientes");

    const q = query(baseClientes, where('email', '==', key.email));
    getDocs(q).then((snapshot) => {
      if (snapshot.docs.length>0) {
          setClienteExistente(snapshot.docs.map((doc) => ({
            id: doc.id, 
            email: key.email,
            nombre: key.nombre,
            telefono: key.telefono 
          })));
      } else {
          addDoc(baseClientes, {
            email: key.email,
            nombre: key.nombre,
            telefono: key.telefono 
          });
      }
    })

    

    /*const itemDet = doc(db, "clientes", "6siKS7HLkH88Q3kTJGbF");
      getDoc(itemDet).then((snapshot) => {
        if (snapshot.exists()) {
            updateDoc(itemDet, key);
            console.log("actualizo");
        } else {
            addDoc(baseClientes, key);
            console.log("no existe");
        }
      })*/

    const baseCompras = collection(db, "compras");

    const compra = items.map((item) => ({
      id: item.id,
      titulo: item.titulo,
      precio: item.precio,
      cantidad: item.cantidad,
    }));

    var date = new Date();
    var fecha = date.toLocaleString();

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
      {typeof id !== "undefined" ? (
        <div className="container-fluid p-3 popp_m">
          <p>Orden de compra generada de manera exitosa</p>
          <p>Código de orden: {id}</p>
          <p>
            En instantes le llegará un mail a {email} con la confirmación de la
            solicitud y un link para generar el pago
          </p>
          <p>Muchas gracias!</p>
        </div>
      ) : Object.keys(cart).length === 0 ? (
        <div className="container-fluid p-3 text-center popp_m">
          <p>Sin productos en el carrito</p>
          <NavLink to={"/item"}>
            <button
              type="button"
              className="btn btn-primary btn-sm mb-1 mt-1 ps-1 pe-1"
            >
              Volver al listado de productos
            </button>
          </NavLink>
          
        </div>
      ) : (
        <>
          <div className="row-cols-auto gap-3">
            {items.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className="container-sm">
            <div className="card mb-3 w-100">
              <div className="row g-0">
                <div className="col-md-5">
                  <div className="card-body">
                    <p className="popp_m">Total</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <p className="popp_m">{cartCant} productos</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card-body">
                    <p className="popp_m text-center">$ {cartCosto}</p>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="card-body text-center">
                    <img
                      onClick={clearCart}
                      src="../Images/clean.png"
                      type="button"
                      alt="Vaciar carrito"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Form onChange={GeneraCompra} />
        </>
      )}
    </>
  );
};

export default CartList;
