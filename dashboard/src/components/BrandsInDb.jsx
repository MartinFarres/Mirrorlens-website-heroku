import React, { useState, useEffect } from "react";
import Brands from "./Brands";

function BrandsInDb() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products/brandsInDb")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(products);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Brands in Data Base
          </h5>
        </div>
        <div className="card-body" id="cambiarFondo">
          <div className="row">
            {products.map((products, index) => {
              return <Brands key={index} brand={products.brand} count={products.count}></Brands>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandsInDb;
