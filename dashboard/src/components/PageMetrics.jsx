import React, { Component } from "react";
import ContentRowMovies from "./ContentRowMovies";

class PageMetrics extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      usersList: [],
      adminsList: [],
      cardsMetrics: [],
    };
  }
  componentDidMount() {
    fetch("/api/users")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((users) => {
        this.setState({ usersList: users.data });
      })
      .catch((error) => console.log(error));
    fetch("/api/users/admins")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((users) => {
        this.setState({ adminsList: users.data });
      })
      .catch((error) => console.log(error));
    fetch("/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        this.setState({ productsList: products.data });
      })
      .catch((error) => console.log(error));
    this.updateCardsMetrics();
  }
  updateCardsMetrics() {
    this.setState({
      cardsMetrics: [
        {
          title: "Products In DB",
          value: this.state.productsList.length,
          color: "primary",
          icon: "fa-film",
        },
        {
          title: "Total Users",
          value: this.state.usersList.length,
          color: "success",
          icon: "fa-award",
        },
        {
          title: "Admins Quantity",
          value: this.state.adminsList.length,
          color: "warning",
          icon: "fa-user",
        },
      ],
    });
  }

  render() {
    return (
      <div className="container-fluid ">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Cards</h5>
          <ContentRowMovies
            valueProducts={this.state.productsList.length}
            valueUsers={this.state.usersList.length}
            valueAdmins={this.state.adminsList.length}
          ></ContentRowMovies>
        </div>
      </div>
    );
  }
}

export default PageMetrics;
