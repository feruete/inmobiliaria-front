import React, { useState } from "react";
import Rule_estate from "../../Api/Rule_estate";
import { useNavigate } from "react-router-dom";
import "../crudAddForm/crudAddForm.css";
import Button from "@mui/material/Button";

function CrudAddForm() {
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [estateType, setEstateType] = useState("");
  const [operation, setOperation] = useState("");
  const [commonExpenses, setCommonExpenses] = useState("");
  const [squareMeter, setSquareMeter] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const priceInput = (e) => {
    setPrice(e.target.value);
  };
  const bedroomsInput = (e) => {
    setBedrooms(e.target.value);
  };
  const estateTypeInput = (e) => {
    setEstateType(e.target.value);
  };
  const operationInput = (e) => {
    setOperation(e.target.value);
  };
  const commonExpensesInput = (e) => {
    setCommonExpenses(e.target.value);
  };
  const squareMeterInput = (e) => {
    setSquareMeter(e.target.value);
  };
  const neighborhoodInput = (e) => {
    setNeighborhood(e.target.value);
  };
  const streetInput = (e) => {
    setStreet(e.target.value);
  };
  const linkInput = (e) => {
    setLink(e.target.value);
  };

  const sendCrudAddForm = async (e) => {
    e.preventDefault();
    const newEstate = {
      precio: price,
      dormitorios: bedrooms,
      tipoInmueble: estateType,
      operacion: operation,
      gastosComunes: commonExpenses,
      metrosCuadrados: squareMeter,
      departamento: "Montevideo",
      ciudad: "Montevideo",
      barrio: neighborhood,
      calle: street,
      link: link,
    };
    console.log(newEstate);
    await Rule_estate.newEstate(newEstate)
      .then((response) => {
        if ((response.success = true)) {
          alert("Se ha ingresado el inmueble con éxito");
          navigate("/");
        } else {
          return;
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <form className="form-wrapper" onSubmit={sendCrudAddForm}>
      <label htmlFor="precio del inmueble" className="label-crud">
        <p>Precio</p>
        <input
          required
          type="text"
          name="precio"
          value={price}
          onChange={priceInput}
          placeholder="Ingrese el precio"
        />
        <br />
      </label>
      <br />
      <label htmlFor="dormitorios" className="label-crud">
        <p>Cantidad de dormitorios</p>
        <select className="select" onChange={bedroomsInput} name="dormitorios">
          <option value="" selected disabled hidden>
            Seleccione aquí
          </option>
          <option className="option" value="1">
            1 dormitorio
          </option>
          <option className="option" value="2">
            2 dormitorios
          </option>
          <option className="option" value="3">
            3 dormitorios
          </option>
          <option className="option" value="4">
            4 dormitorios
          </option>
          <option className="option" value="5">
            5+ dormitorios
          </option>
        </select>
      </label>
      <br />
      <label htmlFor="tipoInmueble" className="label-crud">
        <p>Tipo de inmueble</p>
        <select
          className="select"
          onChange={estateTypeInput}
          name="tipoInmueble"
        >
          <option value="" selected disabled hidden>
            Seleccione aquí
          </option>
          <option className="option" value="apto">
            Apartamento
          </option>
          <option className="option" value="casa">
            Casa
          </option>
          <option className="option" value="garage">
            Garage
          </option>
        </select>
      </label>
      <br />
      <label htmlFor="operacion" className="label-crud">
        <p>Tipo de operación</p>
        <select className="select" onChange={operationInput} name="operacion">
          <option className="option" value="" selected disabled hidden>
            Seleccione aquí
          </option>
          <option className="option" value="alquiler">
            Alquiler
          </option>
          <option className="option" value="venta">
            Venta
          </option>
        </select>
      </label>
      <br />
      <label htmlFor="gastosComunes" className="label-crud">
        <p>Gastos comunes</p>
        <input
          required
          type="text"
          name="gastosComunes"
          value={commonExpenses}
          onChange={commonExpensesInput}
          placeholder="Ingrese los gastos comunes"
        />
      </label>
      <br />
      <label htmlFor="metrosCuadrados" className="label-crud">
        <p>Metros cuadrados</p>
        <input
          required
          type="text"
          name="metrosCuadrados"
          value={squareMeter}
          onChange={squareMeterInput}
          placeholder="Ingrese los metros cuadrados"
        />
      </label>
      <br />
      <label htmlFor="barrio" className="label-crud">
        <p>Barrio</p>
        <select className="select" onChange={neighborhoodInput} name="barrio">
          <option className="option" value="" selected disabled hidden>
            Seleccione aquí
          </option>
          <option className="option" value="Buceo">
            Buceo
          </option>
          <option className="option" value="Centro">
            Centro
          </option>
          <option className="option" value="Palermo">
            Palermo
          </option>
          <option className="option" value="Pocitos">
            Pocitos
          </option>
        </select>
      </label>
      <br />
      <label htmlFor="calle" className="label-crud">
        <p>Calle</p>
        <input
          required
          type="text"
          name="calle"
          value={street}
          onChange={streetInput}
          placeholder="Ingrese calle y numeración"
        />
      </label>
      <br />
      <label htmlFor="link" className="label-crud">
        <p>Link</p>
        <input
          required
          type="text"
          name="link"
          value={link}
          onChange={linkInput}
          placeholder="Ingrese link"
        />
      </label>
      <br />
      {/* PARA SUBIR FOTO */}
      {/* <label htmlFor="photo">
        <p>Foto*</p>
        <input
          onChange={photoInput}
          required
          type="file"
          placeholder="Ingrese calle y numeración"
        />
      </label>
      <br /> */}
      {/* PRUEBA CON REACT FORM */}
      {/* <label htmlFor="photo">
        <p>Foto*</p>
        <input
          required
          type="file"
          name="photo"
          placeholder="file*"
          {...RegisterForm("file", {
            required: true,
            validate: (value) => value[0].size <= 1000000,
          })}
        />
        <br />
        {errors.file?.type === "required" && (
          <span>Este campo es obligatorio</span>
        )}
        {errors.file?.type === "validate" && (
          <span>Tamano maximo del archivo: 1MB</span>
        )}
        <br />
      </label> */}
      <br />
      <Button id="enviar" variant="contained" type="submit">
        Enviar
      </Button>{" "}
    </form>
  );
}

export default CrudAddForm;
