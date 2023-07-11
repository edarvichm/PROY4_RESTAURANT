/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Calendario from "./Calendario";

const FormReservas = ({ menu }) => {
  // useState confirmar fechas disponibles
  const [seleccion, setSeleccion] = useState(menu);
  const [selectedDate, setSelectedDate] = useState("");

  const consultarHoras = (event) => {
    console.log(event);
    setSelectedDate(event.target.value);
  };

  const handleChangeTipoMenu = (event) => {
    setSeleccion(event.target.value);
  };

  const nextWeekend = () => {
    var today = new Date();
    var nextSaturday = new Date();
    var nextSunday = new Date();
    nextSaturday.setDate(today.getDate() + ((5 - today.getDay()) % 7) + 1);
    nextSunday.setDate(today.getDate() + ((6 - today.getDay()) % 7) + 1);
    console.log(nextSaturday.toISOString().split("T")[0]);
    console.log(nextSunday.toISOString().split("T")[0]);
    if (nextSaturday >= today) return nextSaturday.toISOString().split("T")[0];
    else return nextSunday.toISOString().split("T")[0];

    // return nextSaturday.toISOString().split("T")[0];
  };

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

        {/* <div className="App">
          <Calendario />
        </div> */}
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            id="InputFecha"
            onChange={consultarHoras}
            // onChange={(e) => setSelectedDate(e.target.value)
            value={nextWeekend()}
            //date min next saturday max next sunday

            // min={console.log(new Date().toISOString().split("T")[0])}
            // max={console.log(new Date().toISOString().split("T")[0])}
          />

        </div>
        <div className="mb-3"></div>
        <div className="mb-3">
          <label className="form-label">hora</label>
          <input type="time" className="form-control" id="Inputtime" />
        </div>
        <div className="mb-3"></div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={seleccion}
            readOnly
            onChange={handleChangeTipoMenu}
          >
            {/* {menu == "#3tiempos" ? "" : ""} */}
            <option id="dv" defaultValue>
              Selecciona el tipo de menú{" "}
            </option>
            <option id="aC" value="#alacarta">
              A la carta
            </option>
            <option id="3t" value="#3tiempos">
              Menú de 3 tiempos
            </option>
            <option id="5t" value="#5tiempos">
              Menú de 5 tiempos
            </option>
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
      <h3 hidden>{selectedDate}</h3>
    </>
  );
};

export default FormReservas;
