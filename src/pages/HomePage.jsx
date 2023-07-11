// import React from 'react'

import { NavLink } from "react-router-dom";
import FormContact from "../components/FormContact";
import { Servicios } from "./Servicios";
// import rPage from "../pages/reservas";

const HomePage = () => {
  return (
    <>
      <div className="h5">Carta</div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <NavLink className="btn btn-primary" to="/Carta">
          Ver Carta
        </NavLink>
      </div>
      <div className="h5 mt-3">Horarios</div>
      <div className="h6">Sábado: 12:30 - 17:00 y Domingo: 12:30 - 17:00</div>
      <div className="h6">Av. Italia 1853 Local 5, Ñuñoa, Chile</div>
      <div className="container mt-3">
        <Servicios />
      </div>
      <div className="container">
        <FormContact />
      </div>
    </>
  );
};

export default HomePage;
