// import React from 'react'

function FormContact() {
  return (
    <>
      <div className="h5">Formulario de Contacto</div>
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

        <div className="input-group mb-3">
          <span className="form-label">Comentario</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
}

export default FormContact;
