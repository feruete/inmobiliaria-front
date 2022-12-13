import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import CrudAddForm from "../../components/crudAddForm/crudAddForm";
import Rule_auth from "../../Api/Rule_auth";
import Footer from "../../components/footer/footer";
import "./crud.css";

function Crud() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (Rule_auth.isAuth()) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div>
      {isAuth ? (
        <div>
          <Header />
          <CrudAddForm />
          <Footer />
        </div>
      ) : (
        <div className="crudContainer">
          <div className="error-message">
            <p className="error-text">
              No tiene autorización, por favor rediríjase a{" "}
              <a href="/login">Login</a> o en caso contrario a{" "}
              <a href="/">Home</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Crud;
