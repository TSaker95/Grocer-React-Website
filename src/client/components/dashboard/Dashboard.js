import React, { useEffect, useState } from "react";
import { api } from "../../api";
import DashboardNavbar from "./DashboardNavbar";
import ProductList from "./ProductList";
import SpecialsList from "./SpecialsList";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    api
      .get("api/products")
      .then(res => {
        setProducts([...res.data]);
      })
      .catch(err => console.log(`Error: ${err}`));

    api
      .get("/api/specials")
      .then(res => {
        setSpecials([...res.data]);
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  return (
    <div className="container">
      <DashboardNavbar />
      <SpecialsList specials={specials ? specials : []} />
      <ProductList products={products ? products : []} />
    </div>
  );
}
