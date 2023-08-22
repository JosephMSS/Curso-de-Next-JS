import { useRouter } from "next/router";
import React from "react";
import { Navbar } from "../../components";

const ProductItem = () => {
  /**
   * Definimos los params desde el nombre del documento y por medio del hook los podemos obtener
   */
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <h2>ProductItem {id}</h2>;
      <Navbar />
    </>
  );
};

export default ProductItem;
