import React from "react";

import useFetchApi from "../hooks/useFetchApi";
import Cards from "../components/Cards";

const Home = () => {
  const fetchData = useFetchApi("https://api.datos.gob.mx/v1/calidadAire");

  const { data: results } = fetchData;
  const dataCards = results || {};
  const result = Object.values(dataCards);
  console.log(result, "<<");
  return (
    <>
      {result.length > 0 &&
        result[1].map((item) => {
          <div>data: {item}</div>;
        })}
    </>
  );
  // <Cards data={Object.values(dataCards)} />;
};

export default Home;
