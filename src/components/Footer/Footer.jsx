import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="group-1">
        <div className="box">
          <figure>
            <a href="#!">
              <img
                className="logo2"
                src="../Images/header-logo.png"
                alt=""
              ></img>
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <p className="aboutUs1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            soluta eum dicta possimus autem fugiat temporibus quas eveniet
            necessitatibus minus!
          </p>
        </div>
        <div className="box">
          <h2>¡SEGUINOS!</h2>
          <div className="social-media">
            <a href="https://web.whatsapp.com/" target="_blank">
              <img
                className="footer-img"
                src="../Images/wp.png"
                alt="whatsapp"
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img
                className="footer-img"
                src="../Images/ig.png"
                alt="instagram"
              />
            </a>
            <a href="https://es-la.facebook.com/" target="_blank">
              <img
                className="footer-img"
                src="../Images/fb2.png"
                alt="facebook"
              />
            </a>
          </div>
        </div>
        <div className="box">
          <h2>¡CONTACTANOS!</h2>
          <p>Teléfono: 2365.6520 - 099.867.688</p>
          <p>Dirección: Rivera 641</p>
          <p>contacto@inmobiliariarossi.com.uy</p>
        </div>
      </div>
      <div className="group-2">
        <small>
          &copy; 2022 <b>Rossi Inmobiliaria</b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
