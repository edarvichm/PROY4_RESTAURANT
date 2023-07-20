// import React from 'react'
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";

// const element = <FontAwesomeIcon icon={faEnvelope} />;

// ReactDOM.render(element, document.body);

export const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <svg className="bi" width="30" height="24">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>
        <span className="mb-3 mb-md-0 text-muted">© 2023 Pantagruel SPA</span>
      </div>
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        {/* <!-- Links --> */}
        <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
        <p>
          <span className="m-1">
            <FontAwesomeIcon icon={faHome} />
          </span>
          Av. Italia 1853 Local 5, Ñuñoa, Chile
        </p>
        <p>
          <span className="m-1">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          contacto@pantagruel.cl
        </p>
        <p>
          <span className="m-1">
            <FontAwesomeIcon icon={faPhone} />
          </span>{" "}
          + 56 9 123 456 78
        </p>
      </div>
    </footer>
  );
};
