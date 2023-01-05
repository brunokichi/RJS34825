import React, { useState, useEffect } from "react";

import './form.css';

const Form = ({ onChange }) => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    comentarios: "",
  });

  const [comparacion, setComparacion] = useState("");
  const [error, setError] = useState(" ");
  const [submitEstado, setSubmitEstado] = useState("");

  useEffect(() => {
    if (comparacion === "distintos") {
      setError("No coinciden las casillas");
      setSubmitEstado(true);
    } else {
      setError(" ");
      if (
        window.email.value.length === 0 ||
        window.emailcheq.value.length === 0
      ) {
        setSubmitEstado(true);
      } else {
        setSubmitEstado(false);
      }
    }
  }, [comparacion]);

  const finalizarCompra = (ev) => {
    ev.preventDefault();
    onChange(form);
  };

  const changeHandler = (ev) => {
    const { value, name } = ev.target;
    setForm({ ...form, [name]: value });
    if (window.email.value === window.emailcheq.value) {
      setComparacion("");
    } else {
      setComparacion("distintos");
    }
  };

  return (
    <>
      <form onSubmit={finalizarCompra}>
        <div className="container-sm">
          <div className="row justify-content-center">
            <div className="col-md-3 input-group-sm mb-3">
              <label htmlFor="nombre" className="form-label popp_m">
                Nombre y apellido*
              </label>
              <input
                className="form-control"
                name="nombre"
                id="nombre"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="col-md-3 input-group-sm mb-3">
              <label htmlFor="telefono" className="form-label popp_m">
                Número de teléfono*
              </label>
              <input
                className="form-control"
                name="telefono"
                id="telefono"
                onChange={changeHandler}
                required
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 input-group-sm mb-3">
              <label htmlFor="email" className="form-label popp_m">
                Casilla de email*
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="col-md-3 input-group-sm mb-3">
              <label htmlFor="emailcheq" className="form-label popp_m">
                Repita su email*
              </label>
              <input
                type="email"
                className="form-control"
                name="emailcheq"
                id="emailcheq"
                onChange={changeHandler}
                required
              />
              <p className="popp_s error">{error}&nbsp;</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 input-group-sm mb-3">
              <label htmlFor="comentarios" className="form-label popp_m">
                Comentarios
              </label>
              <textarea
                className="form-control"
                name="comentarios"
                id="comentarios"
                value={form.comentarios}
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary btn-sm mb-1 mt-1 ps-1 pe-1"
            disabled={submitEstado}
          >
            Finalizar compra
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
