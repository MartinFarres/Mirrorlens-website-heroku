import React from "react";
import logo from "../assets/images/logo-DH.png";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}

      <Link to={"/"}>
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={logo} alt="Digital House" />
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Mirrorlens</span>
          </a>
        </li>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Actions</div>

      {/* <!-- Nav Item - Pages --> */}
      <Link to={"/cards"}>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder"></i>
            <span>Cards</span>
          </a>
        </li>
      </Link>

      {/* <!-- Nav Item - Charts --> */}
      <Link to={"/brands"}>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Brands</span>
          </a>
        </li>
      </Link>

      {/* <!-- Nav Item - Tables --> */}
      <Link to={"/table"}>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Table</span>
          </a>
        </li>
      </Link>

      <Link to={"/listProducts"}>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-glasses"></i>
            <span>Products</span>
          </a>
        </li>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
