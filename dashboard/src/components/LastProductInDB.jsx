import React, { Component } from "react";
import LastProductDescription from "./LasrProductDescription";

import LastProductImage from "./LastProductImage";
class LastProductInDB extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      productImages: [],
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
    fetch("/api/products/productImages")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        this.setState({ productImages: products.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Last Product in Data Base
            </h5>
          </div>
          <div className="card-body">
            {this.state.productImages.map((product, i, arr) => {
              if (arr.length - 1 === i) {
                return (
                  <LastProductImage
                    key={i}
                    image={product.image1}
                  ></LastProductImage>
                );
              }
            })}
            {this.state.productsList.map((product, i, arr) => {
              if (arr.length - 1 === i) {
                return (
                  <LastProductDescription
                    key={i}
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    description={product.description}
                  ></LastProductDescription>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default LastProductInDB;
