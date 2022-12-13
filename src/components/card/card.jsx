import React from "react";
import "./card.css";
import {
  Typography,
  CardMedia,
  CardContent,
  Card,
  Box,
  Skeleton,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardInfo = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="cardsContainer">
      {loading
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
            return (
              <Box sx={{ width: 300, padding: 4 }}>
                <Skeleton />
                <Skeleton animation="wave" height={240} />
                <Skeleton animation={false} />
              </Box>
            );
          })
        : props.estates.map((estate) => (
            <Card id="card" sx={{ maxWidth: 345 }}>
              <Link to={`/details/${estate.direccionId}`}>
                <CardMedia
                  id="cardMedia"
                  component="img"
                  height="140"
                  image={estate.linkImg}
                  alt="Casa"
                />
              </Link>
              <CardContent>
                <button
                  variant="contained"
                  id={estate.operacion}
                  className="button-operation"
                >
                  {estate.operacion}
                </button>
                <Typography
                  id="card_category"
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {estate.tipoInmueble} | {estate.barrio}
                </Typography>
                <Typography id="card__title" variant="h5">
                  {estate.operacion == "alquiler" ? (
                    <span>$ </span>
                  ) : (
                    <span>u$s </span>
                  )}
                  {estate.precio}
                </Typography>
              </CardContent>

              <div id="icons">
                <div className="bed">
                  <img src="./Images/bed.png" alt="Bed Icon" />
                  <div id="textIcons">
                    <p>{estate.dormitorios} Hab.</p>
                  </div>
                </div>
                <div className="bath">
                  <img src="./Images/bath.png" alt="Bed Icon" />
                  <div id="textIcons">
                    <p>1 Baño</p>
                  </div>
                </div>
                <div className="area">
                  <img src="./Images/area.png" alt="Bed Icon" />
                  <div id="textIcons">
                    <p>{estate.metrosCuadrados} m2</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
    </div>
  );
};

export default CardInfo;
