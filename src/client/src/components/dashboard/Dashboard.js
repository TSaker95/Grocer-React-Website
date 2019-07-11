import React, { useEffect, useState } from "react";
import { api } from "../../api";
import DashboardNavbar from "./DashboardNavbar";
import ProductList from "./ProductList";
import SpecialsList from "./SpecialsList";

export default function Dashboard() {
  const [state, setState] = useState({});

  useEffect(() => {
    api
      .get("api/products")
      .then(result => {
        setState({ products: [...result.data] });
      })
      .catch(err => console.log(`Error: ${err}`));

    api
      .get("/api/specials")
      .then(res => {
        setState({ specials: [...res.data] });
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  return (
    <div className="container">
      <DashboardNavbar />
      <SpecialsList specials={state.specials ? state.specials : []} />
      <ProductList products={state.products ? state.products : []} />
    </div>
  );
}
