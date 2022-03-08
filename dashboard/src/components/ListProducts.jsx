import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`/api/products/pagination?page=${page}`)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => console.log(error));
    fetch(`/api/products/`)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        setAllProducts(products.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(products)
  useEffect(() => {
    fetch(`/api/products/pagination?page=${page}`)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => console.log(error));
  }, [page]);

  const nextPage = async () => {
    setPage(page <= allProducts.length / 6 ? page + 1 : page);
  };

  const prevPage = async () => {
    setPage(page == 1 ? page : page - 1);
  };

  return (
    <div className="mb-4" style={{ width: "-webkit-fill-available" }}>
      <div className="card-header py-3">
        <h3 className="m-1 font-weight-bold text-gray-800 text-center">
          Products in Data Base
        </h3>
      </div>
      <div className="card-body container">
        <div class="row justify-content-center">
          {products.length === 0 && <h3>Cargando...</h3>}
          {products.map((product, i, arr) => {
            return (
              <div
                className="col-lg-4 col-md-12 text-center "
                style={{ height: "248.81px" }}
                key={i}
              >
                <Link to={`/detail/${product.id}`}>
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-2"
                    src={`http://localhost:3001/${product.imageProducts.image1}`}
                    style={{ height: "171px" }}
                  ></img>
                  <h4 className="border-bottom font-weight-bold text-grey-800 mb-2">
                    {product.name}
                  </h4>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button type="button" className="btn btn-dark mx-4" onClick={prevPage}>
          Pagina Anterior
        </button>
        <h3 className="my-2">{page}</h3>
        <button type="button" className="btn btn-dark mx-4" onClick={nextPage}>
          Siguiente Pagina
        </button>
      </div>
    </div>
  );
}

export default ListProducts;
