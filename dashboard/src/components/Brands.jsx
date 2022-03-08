import React from "react";
import { Link } from "react-router-dom";
function Brands(props) {
  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow ">
          <div className="card-body text-center">
            <Link to={`/productsByBrand/${props.brand}`}>
              {props.brand}: <span className="pl-2">{props.count}</span>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Brands;
