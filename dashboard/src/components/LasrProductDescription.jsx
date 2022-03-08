import React from "react";
import { Link } from "react-router-dom";  
function LastProductDescription(props) {
  return (
    <React.Fragment>
      <h5 className="m-0 font-weight-bold text-gray-800">
        {props.name}
        {props.brand}
      </h5>
      <p>{props.description}</p>
      <Link to={`/detail/${props.id}`}>
        <button
          className="btn btn-danger"
          target="_blank"
          rel="nofollow"
          href="/"
        >
          View product detail
        </button>
      </Link>
    </React.Fragment>
  );
}

export default LastProductDescription;
