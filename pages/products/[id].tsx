import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";

const ProductItem = () => {
  /**
   * Definimos los params desde el nombre del documento y por medio del hook los podemos obtener
   */
  const {
    query: { id },
  } = useRouter();
  const emptyProduct: TProduct = {
    attributes: {
      description: "",
      hardiness: "",
      shape: "",
      taste: "",
    },
    id: "",
    image: "",
    name: "",
    price: 0,
    sku: "",
  };
  const [productItem, setProductItem] = useState(emptyProduct);
  useEffect(() => {
    if (id) {
      /**
       * !si no coloco en la ruta la primera barra me va a hacer una 
       * !solicitud a http://localhost:3000/products/api/avo/2zd33b8c
       * !y va a dar error
       */
      window
        .fetch(`/api/avo/${id}`)
        .then(async (res) => {

          const data: TProduct = await res.json()
          return data
        })
        .then((data) => {
          setProductItem(data)
        });
    }

    return () => { };
  }, [id]);

  return (
    <>
      <Navbar />
      <section>
        <h1>ProductItem</h1>
        <h2>{productItem.name}</h2>
        <p>{productItem.attributes.description}</p>
      </section>
    </>
  );
};

export default ProductItem;
