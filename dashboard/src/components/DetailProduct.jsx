import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function DetailProduct() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/products/detail/${id}`)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((product) => {
        setProduct(product.data);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div className="d-flex justify-content-center container mt-5">
      {product ? (
        <div className="card p-3 bg-white">
          <i className="fa fa-glasses"></i>

          <div className="about-product text-center mt-2">
            <img
              src={`http://localhost:3001/${product.imageProducts.image1}`}
              style={{ width: "300" }}
            />
            <div>
              <h4>{product.name}</h4>
              <h6 className="mt-0 text-black-50">{product.brand}</h6>
            </div>
          </div>
          <div className="stats mt-2">
            <div className="d-flex justify-content-between p-price">
              <span>Gender</span>
              <span>
                {product.gender === "M"
                  ? "Masculino"
                  : product.gender === "F"
                  ? "Femenino"
                  : "Unisex"}
              </span>
            </div>
            <div className="d-flex justify-content-between p-price">
              <span>Type</span>
              <span>{product.type}</span>
            </div>
            <div className="d-flex justify-content-between p-price">
              <span>Model</span>
              <span>{product.model}</span>
            </div>
          </div>
          <div className="d-flex justify-content-between total font-weight-bold mt-4">
            <span>Price</span>
            <span>${product.price}</span>
          </div>
        </div>
      ) : (
        <h3>Cargando...</h3>
      )}
    </div>
  );
}

export default DetailProduct;
