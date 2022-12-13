import React, { useState } from "react";
import "../searchBar/searchBar.css";
import Button from "@mui/material/Button";

function SearchBar(props) {
  const [bedrooms, setBedrooms] = useState("");
  const [estateType, setEstateType] = useState("");
  const [operation, setOperation] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  const operationInput = (e) => {
    setOperation(e.target.value);
  };

  const estateTypeInput = (e) => {
    setEstateType(e.target.value);
  };

  const neighborhoodInput = (e) => {
    setNeighborhood(e.target.value);
  };

  const bedroomsInput = (e) => {
    setBedrooms(e.target.value);
  };

  const onClickSearch = () => {
    props.searchEstatesBySearchBar(
      bedrooms,
      estateType,
      operation,
      neighborhood
    );
  };

  return (
    <div className="div">
      <div className="container">
        <select className="selector" onChange={operationInput} name="operacion">
          <option value="" selected disabled hidden>
            Tipo de operación
          </option>
          <option value="">Todos</option>
          <option value="venta">Venta</option>
          <option value="alquiler">Alquiler</option>
        </select>
        <select
          className="selector"
          onChange={estateTypeInput}
          name="tipoInmueble"
        >
          <option value="" selected disabled hidden>
            Tipo de inmueble
          </option>
          <option value="">Todos</option>
          <option value="casa">Casa</option>
          <option value="apto">Apartamento</option>
          <option value="garage">Garage</option>
        </select>
        <select className="selector" onChange={neighborhoodInput} name="barrio">
          <option value="" selected disabled hidden>
            Barrio
          </option>
          <option value="">Todos</option>
          <option value="Buceo">Buceo</option>
          <option value="Centro">Centro</option>
          <option value="Palermo">Palermo</option>
          <option value="Pocitos">Pocitos</option>
        </select>
        <select
          className="selector"
          onChange={bedroomsInput}
          name="dormitorios"
        >
          <option value="" selected disabled hidden>
            Cuartos
          </option>
          <option value="">Todos</option>
          <option value="1">1 dormitorios</option>
          <option value="2">2 dormitorios</option>
          <option value="3">3 dormitorios</option>
          <option value="4">4 dormitorios</option>
          <option value="5">5+ dormitorios</option>
        </select>
        <Button
          id="buttonRefresh"
          variant="outlined"
          onClick={() => {
            props.searchEstates();
          }}
        >
          Refresh
        </Button>
        <Button id="button" variant="contained" onClick={onClickSearch}>
          Buscar
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
