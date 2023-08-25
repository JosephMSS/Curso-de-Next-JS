import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
/**
 * Pagina básica ya que no depende de algún contenedor
 * Este crea una pagina partir de la estructura de carpetas de la app
 */
const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    window.fetch('api/avo').then(async (res) => {
      const data: TProduct[] = await res.json();
      return data
    }).then((data) => {
      setProducts(data)
    })
    return () => {
    }
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.name}</li>
        })}
      </ul>
    </div>
  );
};
export default Home;
