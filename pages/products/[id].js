import { useRouter } from "next/router";
import React from "react";

const ProductItem = () => {
/**
 * Definimos los params desde el nombre del documento y por medio del hook los podemos obtener
 */
  const {
    query: { id },
  } = useRouter();

  return <h2>ProductItem {id}</h2>;
};

export default ProductItem;
