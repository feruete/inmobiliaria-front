import React, { useEffect, useState } from "react";
import "./detailComponent.css";
import { useNavigate, useParams } from "react-router-dom";
import Rule_estate from "../../Api/Rule_estate";

function DetailComponent() {
  const { id } = useParams();
  const [estateById, setEstateById] = useState("");
  const navigate = useNavigate();

  const searchEstateById = async () => {
    await Rule_estate.getEstatesById(id)
      .then((respuesta) => {
        if (respuesta[0]?.direccionId) {
          setEstateById(respuesta);
        } else {
          navigate("/detailNotFound");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    searchEstateById();
  }, []);

  return (
    <div className="detailPage">
      <div className="datosIniciales">
        <img
          className="detailImg"
          src={estateById[0]?.linkImg}
          alt="foto de la propiedad"
        />
        <h2 className="titleProperty">TÍTULO DE LA PROPIEDAD</h2>
        <div className="datosIniciales1">
          <ul className="datosIniciales2">
            <div className="divLi">
              <li>
                Valor de la propiedad :
                {estateById[0]?.operacion == "alquiler" ? (
                  <span>$ </span>
                ) : (
                  <span>u$s </span>
                )}
                {estateById[0]?.precio}
              </li>
            </div>
            <div className="divLi">
              <li>Gastos comunes : ${estateById[0]?.gastosComunes}</li>
            </div>
            <div className="divLi">
              <li>Cantidad de dormitorios : {estateById[0]?.dormitorios}</li>
            </div>
            <div className="divLi">
              <li>Inmueble : {estateById[0]?.tipoInmueble}</li>
            </div>
            <div className="divLi">
              <li>Tamaño : {estateById[0]?.metrosCuadrados} m2</li>
            </div>
            <div className="divLi">
              <li>Operación : {estateById[0]?.operacion}</li>
            </div>
          </ul>
        </div>
      </div>

      <div className="detallesPropiedad">
        <h2>DETALLES DE LA PROPIEDAD</h2>
        <ul className="detallePropiedad1">
          <div className="divLi">
            <li>Domicilio : {estateById[0]?.calle}</li>
          </div>
          <div className="divLi">
            <li>Barrio : {estateById[0]?.barrio}</li>
          </div>
        </ul>
      </div>

      <div className="description">
        <h2>DESCRIPCIÓN</h2>
        <p className="descriptionParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          neque explicabo asperiores adipisci ratione est perspiciatis, saepe
          accusantium. Quae atque magni dolor officia iure enim sint itaque iste
          dignissimos expedita!
        </p>
      </div>

      <div className="ytbVideo">
        <h2>VIDEO!</h2>
        <iframe
          className="videoYtb"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IWGDLUlyzHk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default DetailComponent;
