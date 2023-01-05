import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";

import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [itemDetail, setItemsDetails] = useState([]);

  const { id } = useParams();

  const [alineacion, setAlineacion] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    if (id) {
      const itemDet = doc(db, "items", id);
      getDoc(itemDet).then((snapshot) => {
        if (snapshot.exists()) {
          setItemsDetails({ id: snapshot.id, ...snapshot.data() });
          setAlineacion("justify-content-center");
        }
      });
    } else {
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapshot) => {
        setItemsDetails(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    }
  }, [id]);

  return (
    <>
      <div className="container-fluid p-3 bkg_transp">
        <div className={`card-group row-cols-auto gap-3 ${alineacion}`}>
          {Object.keys(itemDetail).length === 0 ? (
            <div className="d-flex">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : id ? (
            <ItemDetail itemDetail={itemDetail} key={itemDetail.id} />
          ) : (
            itemDetail.map((item) => (
              <ItemDetail itemDetail={item} key={item.id} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
