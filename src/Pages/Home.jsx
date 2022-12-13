import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import Hero from "../components/header/hero/hero";
import Footer from "../components/footer/footer";
import Card from "../components/card/card";
import Rule_estate from "../Api/Rule_estate";
import SearchBar from "../components/searchBar/searchBar";
import { useNavigate } from "react-router-dom";
import WpIcon from "../components/wpIcon/wpIcon";

function Home() {
  const [estates, setEstates] = useState([]);
  const navigate = useNavigate();

  const searchEstates = async () => {
    await Rule_estate.getEstates()
      .then((response) => {
        setEstates(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    searchEstates();
  }, []);

  const searchEstatesBySearchBar = async (
    bedrooms,
    estateType,
    operation,
    neighborhood
  ) => {
    const searchedEstates = await Rule_estate.getEstatesBySearchBar({
      dormitorios: bedrooms,
      tipoInmueble: estateType,
      operacion: operation,
      barrio: neighborhood,
    });
    setEstates(searchedEstates);
  };

  return (
    <div>
      <Header />
      <Hero />
      <SearchBar
        searchEstatesBySearchBar={searchEstatesBySearchBar}
        searchEstates={searchEstates}
      />
      <div>
        {!estates.length ? (
          <div className="homeErrorContainer">
            <div className="error-message">
              <p className="error-text">
                No se encontraron inmuebles con dichas características
              </p>
            </div>
          </div>
        ) : (
          <Card estates={estates} />
        )}
      </div>
      <WpIcon />
      <Footer />
    </div>
  );
}

export default Home;
