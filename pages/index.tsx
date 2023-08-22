import React from "react";
import { Navbar } from "../components";
/**
 * Pagina básica ya que no depende de algún contenedor
 * Este crea una pagina partir de la estructura de carpetas de la app
 */
const Home = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Navbar />
    </div>
  );
};
export default Home;
