import React from "react";

import useFetchApi from "../hooks/useFetchApi";
import Loader from "../components/Loader";
import Cards from "../components/Cards";

const Home = () => {
  const { loading, data, error } = useFetchApi(
    "https://api.datos.gob.mx/v1/calidadAire"
  );

  if (loading) return <Loader />;
  if (data.results.length > 0 > 0) return <Cards data={data} />;
};

export default Home;
