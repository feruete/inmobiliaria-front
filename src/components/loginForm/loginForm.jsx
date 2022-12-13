import React, { useState } from "react";
import Rule_auth from "../../Api/Rule_auth";
import { useNavigate } from "react-router-dom";
import "../loginForm/loginForm.css";
import Button from "@mui/material/Button";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const credentials = { email: email, password: password };
    await Rule_auth.userLogin(credentials)
      .then((response) => {
        if ((response.success = true)) {
          navigate("/crud");
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
        <img class="form-img" src="./Images/header-logo.png" alt="" />
      </a>
      <div class="form-wrapper">
        <form onSubmit={sendForm} class="form">
          <div class="input-group">
            <div className="nam-user">
              <label for="username" class="label">
                Nombre de Usuario
              </label>
            </div>
            <input
              required
              type="email"
              placeholder=""
              value={email}
              onChange={emailInput}
              class="input"
            />
          </div>
          <div class="input-group">
            <div class="label-flex">
              <label for="username" class="label">
                Contraseña
              </label>
              <a class="link" href="#">
                Olvidé mi contraseña
              </a>
            </div>
            <input
              required
              type="password"
              placeholder=""
              value={password}
              onChange={passwordInput}
              class="input"
            />
          </div>
          <Button variant="contained" className="login-btn" type="submit">
            Iniciar Sesión
          </Button>
        </form>
        <div class="or-container">
          <div class="or-wrapper">
            <span class="line"></span>
            <span class="or">Continuar Con</span>
            <span class="line"></span>
          </div>
          <div class="oauth-container">
            <Button variant="contained" id="facebook">
              Facebook
            </Button>
            <Button variant="contained" id="google">
              Google+
            </Button>
          </div>
          <p class="p">
            ¿No estás Registrado?{" "}
            <a href="/register" class="link">
              Registrarse
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
