import React from "react";
function ProductInTable(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.brand}</td>
        <td>
          {props.gender === "M"
            ? "Masculino"
            : props.gender === "F"
            ? "Femenino"
            : "Unisex"}
        </td>
        <td>{props.type}</td>
        <td>${props.price}</td>
      </tr>
    </React.Fragment>
  );
}

export default ProductInTable;
