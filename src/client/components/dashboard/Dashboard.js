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

    return () => {};
  }, []);

  const addProduct = () => {};

  const updateProduct = () => {};

  const deleteProduct = id => {
    // Delete product from database
    api.delete(`api/products/${id}`).then(res => console.log(res));
    // Rerender list with all products where id does not equal the id of deleted product
    setProducts(products.filter(product => product._id !== id));
  };

  const addSpecial = () => {};

  const updateSpecial = () => {};

  const deleteSpecial = () => {};

  return (
    <div className="container">
      <DashboardNavbar />
      <SpecialsList
        specials={specials ? specials : []}
        products={products ? products : []}
      />
      <ProductList
        products={products ? products : []}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}
