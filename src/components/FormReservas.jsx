/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const FormReservas = (props) => {
  return (
    <>
      <div className="h5">Formulario de Reservas</div>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" id="InputName" />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Nunca compatiremos tu email con nadie.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input type="date" className="form-control" id="InputFecha" />
        </div>
        <div className="mb-3"></div>
        <div className="mb-3">
          <label className="form-label">hora</label>
          <input type="time" className="form-control" id="Inputtime" />
        </div>
        <div className="mb-3"></div>
        <div className="mb-3">
          <select className="form-select" aria-label="Default select example">
            <option selected>Selecciona el tipo de menú </option>
            <option value="1">A la carta</option>
            <option value="2">Menú de 3 tiempos</option>
            <option value="3">Menú de 5 tiempos</option>
          </select>
        </div>
        <div className="mb-3"></div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

FormReservas.propTypes = {};

export default FormReservas;
