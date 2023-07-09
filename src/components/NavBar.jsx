// import React from 'react'

import { NavLink } from "react-router-dom";

// export const NavBar = ({ navHeight }) => {
export const NavBar = () => {
  // navHeight(200);
  return (
    <>
      {/* {() => navHeight(200)} */}
      <nav id="navbar" className="navbar  bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" to="#">
            <img
              src="/img/Logosf.svg"
              alt=""
              width="354"
              height="123"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menú
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Carta">
                    Carta
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Reservas">
                    Reservas
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Carta
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        Menú de 3 Tiempos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        Menú de 5 Tiempos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        Menú a la Carta
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
