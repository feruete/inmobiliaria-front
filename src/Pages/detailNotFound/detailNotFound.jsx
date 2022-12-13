import React from "react";
import "./detailNotFound.css";

function DetailNotFound() {
  return (
    <div className="pageOne">
      <div className="pageNotFound">
        <h3 className="notFoundTitle">No se encontró lo que buscabas!</h3>
        <img className="logoPageError" src="../Images/header-logo.png" alt="" />

        <a className="goBack" href="/">
          Volver a la pantalla de inicio
        </a>
      </div>
    </div>
  );
}

export default DetailNotFound;
