import React from "react";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import ProductsTable from "./ProductsTable";
import TopBar from "./TopBar";

const ContentWrapper = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar></TopBar>

        <ContentRowTop></ContentRowTop>
      </div>
      <ProductsTable></ProductsTable>

      <Footer></Footer>
    </div>
  );
};

export default ContentWrapper;
