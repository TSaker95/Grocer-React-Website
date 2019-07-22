import React, { useEffect, useState } from "react";
import { api } from "../../api";
import DashboardNavbar from "./DashboardNavbar";
import ProductList from "./ProductList";
import SpecialsList from "./SpecialsList";
import { state } from "../AuthHandler";
import { Redirect } from "react-router-dom";

export default function Dashboard(props) {
  const [products, setProducts] = useState([]);
  const [specials, setSpecials] = useState([]);

  // Get the all products from the API
  const getProducts = () => {
    api
      .get("api/products")
      .then(res => setProducts([...res.data]))
      .catch(err => console.log(`Error: ${err}`));
  };

  // Get all specials from the API
  const getSpecials = () => {
    api
      .get("/api/specials")
      .then(res => setSpecials([...res.data]))
      .catch(err => console.log(`Error: ${err}`));
  };

  // Initial render
  useEffect(() => {
    getProducts();
    getSpecials();
    return () => {};
  }, []);

  // Add products functions
  const addProduct = product => {
    // Send post request to API with new product
    api
      .post("/api/products", product)
      .then(res => {
        getProducts();
      })
      .catch(err => console.log(err));
  };

  // Update products function
  const updateProduct = (prevProduct, updatedProductInfo) => {
    api
      .put(`api/products/${prevProduct._id}`, updatedProductInfo)
      .then(res => getProducts())
      .catch(err => console.log(err));
  };

  // Delete products function
  const deleteProduct = productId => {
    const productSpecial = specials.find(
      special => special.productId === productId
    );
    api.delete(`api/specials/${productSpecial._id}`).then(res => getSpecials());

    api
      .delete(`api/products/${productId}`)
      .then(res => {
        getProducts();
      })
      .catch(err => console.log(err));
  };

  // Add specials function
  const addSpecial = special => {
    api
      .post("/api/specials", special)
      .then(res => {
        getSpecials();
      })
      .catch(err => console.log(err));
  };

  const updateSpecial = (prevSpecial, updatedSpecial) => {
    api
      .put(`/api/specials/${prevSpecial._id}`, updatedSpecial)
      .then(res => getSpecials())
      .catch(err => console.log(err));
  };

  const deleteSpecial = specialId => {
    api
      .delete(`/api/specials/${specialId}`)
      .then(res => {
        getSpecials();
      })
      .catch(err => console.log(err));
  };

  return state.isLoggedIn === "true" ? (
    <div className="container">
      <DashboardNavbar props={props} />
      <SpecialsList
        specials={specials ? specials : []}
        products={products ? products : []}
        addSpecial={addSpecial}
        deleteSpecial={deleteSpecial}
        updateSpecial={updateSpecial}
      />
      <ProductList
        products={products ? products : []}
        specials={specials ? specials : []}
        deleteProduct={deleteProduct}
        addProduct={addProduct}
        updateProduct={updateProduct}
      />
    </div>
  ) : (
    <Redirect to="/login" />
  );
}
