// import React from "react";
import { Link } from "react-router-dom";

export const Servicios = () => {
  return (
    <>
      <div className="h5 mt-3">Servicios</div>
      <div className="card mt-3">
        {/* <img src="..." className="card-img-top" alt="..." /> */}

        <div className="card-body">
          <h5 className="card-title">Menú a la Carta</h5>
          <p className="card-text">
            Elige una o mas opciones de nuestra carta.
          </p>
          <hr className="border border-1 opacity-75" />
          <div className="fs-6 fw-light text-center">
            ver carta - Sin tiempo determinado
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <Link className="btn btn-primary" to="/Reservas">
              Reservar
            </Link>
          </div>
        </div>
      </div>
      <div className="card mt-3">
        {/* <img src="..." className="card-img-top" alt="..." /> */}

        <div className="card-body">
          <h5 className="card-title">Menú de 3 Tiempos</h5>
          <p className="card-text">
            Elige una entrada, un plato de fondo y postres clásicos de Francia.
          </p>
          <hr className="border border-1 opacity-75" />
          <div className="fs-6 fw-light text-center">
            💰$25.000 - ⌛25 minutos
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <Link className="btn btn-primary" to="/Reservas">
              Reservar
            </Link>
          </div>
        </div>
      </div>
      <div className="card mt-3">
        {/* <img src="..." className="card-img-top" alt="..." /> */}

        <div className="card-body">
          <h5 className="card-title">Menú de 5 Tiempos</h5>
          <p className="card-text">
            Elige un picoteo, entrada, un plato de fondo y postres clásicos de
            Francia.
          </p>
          <hr className="border border-1 opacity-75" />
          {/* <div><FontAwesomeIcon icon={faSackDollar} bounce style={{color: "#dfcb4e",}} /></div> */}
          <div className="fs-6 fw-light text-center">
            💰$35.000 - ⌛45 minutos
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <Link className="btn btn-primary" to="/Reservas">
              Reservar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
