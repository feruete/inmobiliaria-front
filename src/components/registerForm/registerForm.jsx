import React, { useState } from "react";
import Rule_auth from "../../Api/Rule_auth";
import { useNavigate } from "react-router-dom";
import "../registerForm/registerForm.css";
import Button from "@mui/material/Button";

function RegisterForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [access, setAccess] = useState("");
  const navigate = useNavigate();

  const nameInput = (e) => {
    setName(e.target.value);
  };
  const lastNameInput = (e) => {
    setLastName(e.target.value);
  };
  const emailInput = (e) => {
    setEmail(e.target.value);
  };
  const passwordInput = (e) => {
    setPassword(e.target.value);
  };
  const repeatPasswordInput = (e) => {
    setRepeatPassword(e.target.value);
  };
  const accessInput = (e) => {
    setAccess(e.target.value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const newCredentials = {
      nombre: name,
      apellido: lastName,
      email: email,
      password: password,
      acceso: access,
    };
    await Rule_auth.userRegister(newCredentials)
      .then((response) => {
        if ((response.success = true)) {
          navigate("/login");
        } else {
          return;
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div class="login-container">
      <a href="/">
        <img class="reg-img" src="./Images/header-logo.png" alt="" />
      </a>
      <form onSubmit={sendForm} class="form-wrapper">
        <label htmlFor="Nombre" className="label">
          <p>Nombre</p>
          <input
            className="input"
            required
            type="text"
            name="Nombre"
            value={name}
            onChange={nameInput}
            placeholder=""
          />
        </label>
        <br />
        <label htmlFor="Apellido" className="label">
          <p>Apellido</p>
          <input
            className="input"
            required
            type="text"
            name="lastName"
            value={lastName}
            onChange={lastNameInput}
            placeholder=""
          />
        </label>
        <br />
        <label htmlFor="email" className="label">
          <p>Email</p>
          <input
            className="input"
            required
            type="email"
            name="email"
            value={email}
            onChange={emailInput}
            placeholder=""
          />
        </label>
        <br />
        <label htmlFor="password" className="label">
          <p>Contraseña</p>
          <input
            className="input"
            required
            type="password"
            name="lastName"
            value={password}
            onChange={passwordInput}
            placeholder=""
          />
        </label>
        <br />
        <label htmlFor="password" className="label">
          <p>Repita su Contrseña</p>
          <input
            className="input"
            required
            type="password"
            name="lastName"
            value={repeatPassword}
            onChange={repeatPasswordInput}
            placeholder=""
          />
        </label>
        <br />
        <label htmlFor="acceso" className="label">
          <p>Acceso</p>
          <select onChange={accessInput} name="acceso" className="select">
            <option className="option" value="" selected disabled hidden>
              Acceso
            </option>
            <option className="option" value="1">
              Comprador
            </option>
            <option className="option" value="2">
              Vendedor
            </option>
          </select>
        </label>
        <br />
        <br />
        <Button id="enviar" variant="contained" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
