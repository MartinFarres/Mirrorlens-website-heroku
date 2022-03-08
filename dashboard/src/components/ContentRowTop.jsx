import React from "react";
import BrandsInDb from "./BrandsInDb";
import LastProductInDB from "./LastProductInDB";
import PageMetrics from "./PageMetrics";

function ContentRowTop() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      <div>
        {/* <!-- Movies in Data Base --> */}
        <PageMetrics></PageMetrics>
        {/* <!-- End movies in Data Base --> */}

        {/* <!-- Content Row Last Movie in Data Base --> */}
        <div className="row">
          <LastProductInDB></LastProductInDB>
          <BrandsInDb></BrandsInDb>
        </div>
      </div>
    </div>
  );
}

export default ContentRowTop;
