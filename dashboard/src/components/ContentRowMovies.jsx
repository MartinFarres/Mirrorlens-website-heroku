import React from "react";

function ContentRowMovies(props) {
  return (
    <div className="row">
      <div className="col-md-4 mb-4" >
        <div className={`card border-left-primary shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div
                  className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}
                >
                  Products In DB
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {props.valueProducts}
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas fa-film fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4" >
        <div className={`card border-left-success shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div
                  className={`text-xs font-weight-bold text-success text-uppercase mb-1`}
                >
                  Total Users
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {props.valueUsers}
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas fa-award fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className={`card border-left-warning shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div
                  className={`text-xs font-weight-bold text-warning text-uppercase mb-1`}
                >
                  Admins Quantity
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {props.valueAdmins}
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas fa-user fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentRowMovies;
