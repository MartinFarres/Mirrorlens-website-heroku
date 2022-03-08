import React, { Component } from "react";
import ProductInTable from "./ProductInTable";

class ProductsTable extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
    };
  }
  componentDidMount() {
    fetch("/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        this.setState({ productsList: products.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Marca</th>
              <th scope="col">Genero</th>
              <th scope="col">Tipo</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productsList.map((products, index) => {
              return (
                <ProductInTable
                  key={index}
                  id={products.id}
                  name={products.name}
                  brand={products.brand}
                  gender={products.gender}
                  type={products.type}
                  price={products.price}
                ></ProductInTable>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Marca</th>
              <th scope="col">Genero</th>
              <th scope="col">Tipo</th>
              <th scope="col">Precio</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default ProductsTable;
