/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Calendario from "./Calendario";
import { toast } from "react-toastify";
import { db } from "../firebase/firebase.js";

const FormReservas = ({ menu }) => {
  // useState para guardar los datos del formulario
  const [datos, setDatos] = useState({
    nombre: "",
    telefono: "",
    email: "",
    personas: "",
    fecha: "",
    hora: "",
    menu: "",
    observaciones: "",
  });

  const guardarDatos = async (e) => {
    e.preventDefault();
    // consultarHoras(e.target.value:datos.hora);
    try {
      await db.collection("reservas").add(datos);
      toast("Reserva enviada con éxito, se enviará confirmación", {
        type: "success",
        autoClose: 5000,
        position: "bottom-center",
      });
    } catch (error) {
      toast("Error al enviar la reserva", {
        type: "error",
        autoClose: 5000,
        position: "bottom-center",
      });
    }
  };
  // useState confirmar fechas disponibles
  const [seleccion, setSeleccion] = useState(menu);
  const [selectedDate, setSelectedDate] = useState("");

  const consultarHoras = (event) => {
    // console.log(event);
    setSelectedDate(event.target.value);
  };

  const handleChangeTipoMenu = (event) => {
    setSeleccion(event.target.value);
    console.log(event.target.value);
  };

  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const nextWeekend = () => {
    var today = new Date();
    var nextSaturday = new Date();
    var nextSunday = new Date();
    nextSaturday.setDate(today.getDate() + ((5 - today.getDay()) % 7) + 1);
    nextSunday.setDate(today.getDate() + ((6 - today.getDay()) % 7) + 1);
    // console.log(nextSaturday.toISOString().split("T")[0]);
    // console.log(nextSunday.toISOString().split("T")[0]);
    if (nextSaturday >= today) return nextSaturday.toISOString().split("T")[0];
    else return nextSunday.toISOString().split("T")[0];

    // return nextSaturday.toISOString().split("T")[0];
  };

  return (
    <>
      <div className="h5">Formulario de Reservas</div>
      <form onSubmit={guardarDatos}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            id="InputName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Número de Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="telefono"
            pattern="[6-9]{1}[0-9]{4}[0-9]{4}"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            Nunca compatiremos tu email con nadie.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">N° Personas</label>
          <input
            type="number"
            id="personas"
            name="personas"
            min="1"
            max="100"
            onChange={handleChange}
          />
        </div>

        {/* <div className="App">
          <Calendario />
        </div> */}
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            name="fecha"
            className="form-control"
            id="InputFecha"
            onChange={handleChange}
            // onChange={(e) => setSelectedDate(e.target.value)
            // value={nextWeekend()}
            //date min next saturday max next sunday

            // min={console.log(new Date().toISOString().split("T")[0])}
            // max={console.log(new Date().toISOString().split("T")[0])}
          />
        </div>
        <div className="mb-3"></div>
        <div className="mb-3">
          <label className="form-label">hora</label>
          <input
            type="time"
            className="form-control"
            name="hora"
            id="Inputtime"
            onChange={handleChange}
            onChangeCapture={consultarHoras}
          />
        </div>
        <div className="mb-3"></div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="menu"
            value={seleccion}
            readOnly
            onChange={handleChange}
            onChangeCapture={handleChangeTipoMenu}
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
        <div className="input-group mb-3">
          <span className="form-label">Comentario</span>
          <textarea
            className="form-control"
            name="observaciones"
            aria-label="With textarea"
            onChange={handleChange}
          ></textarea>
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
