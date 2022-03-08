import React from "react";
function LastProductImage(props) {
  return (
    <React.Fragment>
      <div className="text-center">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: "40em" }}
          src={`http://localhost:3001/${props.image}`}
          alt=" Last Product "
        />
      </div>
    </React.Fragment>
  );
}

export default LastProductImage;
