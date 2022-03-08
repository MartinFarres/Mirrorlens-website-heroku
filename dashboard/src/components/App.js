import "../assets/css/App.css";
import SideBar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import cards from "./PageMetrics";
import brands from "./BrandsInDb";
import table from "./ProductsTable";
import listProducts from "./ListProducts";
import DetailProduct from "./DetailProduct";
import ProductsByBrand from "./ProductsByBrand";
import Error404 from "./Error404";

function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <SideBar></SideBar>
        <Switch>
          <Route path={"/cards"} exact={true} component={cards} />
          <Route path={"/brands"} exact={true} component={brands} />
          <Route path={"/table"} exact={true} component={table} />
          <Route path={"/"} exact={true} component={ContentWrapper} />
          <Route path={"/listProducts"} exact={true} component={listProducts} />
          <Route path={"/detail/:id"} exact={true} component={DetailProduct} />
          <Route
            path={"/productsByBrand/:brand"}
            exact={true}
            component={ProductsByBrand}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
