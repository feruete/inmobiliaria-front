import React from "react";
import "./header.css";
import MenuHamburguer from "./menuHamburguer/menu";

function Header() {
  return (
    <div className="mainHeader">
      <div>
        <a href="http://localhost:3000/" className="main-title">
          INMOBILIARIA ROSSI
        </a>
      </div>
      <img src="../Images/header-logo.png" className="brand-logo" alt="logo" />

      <nav className="navbar">
        <div className="menuHamburguer">
          <MenuHamburguer></MenuHamburguer>
        </div>

        <ul className="navbar-ul">
          <li>
            <a className="admButton" href="http://localhost:3000/crud">
              Administrar
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/">Inicio</a>
          </li>
          <li>
            <a href="#!">Empresa</a>
          </li>
          <li>
            <a href="#!">Servicios</a>
          </li>
          <li>
            <a href="#!">Estudio</a>
          </li>
          <li>
            <a href="#!">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
