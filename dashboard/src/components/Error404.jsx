import React from "react";
import { Link } from "react-router-dom";
function Error404(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto " style={{ marginTop: "13rem" }}>
            <div className="payment">
              <div className="payment_header">
                <div className="check">
                  <i
                    className="fa fa-exclamation-triangle"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="content">
                <h1>Opps ! Something Went Wrong</h1>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.{" "}
                </p>
                <Link to={"/"}>Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Error404;
