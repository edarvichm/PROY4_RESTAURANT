// import React, { useState } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendario() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  const esFechaValida = (fecha) => {
    const diaSemana = fecha.getDay();
    const fechaActual = new Date();

    return (
      diaSemana === 0 || // Domingo
      diaSemana === 6 || // Sábado
      (fecha > fechaActual && diaSemana !== 0 && diaSemana !== 6) // Días posteriores al día actual
    );
  };

  return (
    <div className="container">
      <h1>Calendario</h1>
      <DatePicker
        selected={fechaSeleccionada}
        onChange={(date) => setFechaSeleccionada(date)}
        filterDate={esFechaValida}
        placeholderText="Selecciona una fecha"
        className="form-control"
      />
    </div>
  );
}

export default Calendario;
