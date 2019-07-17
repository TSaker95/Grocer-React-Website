import React, { useEffect, useState } from "react";
import { api } from "../../api";
import DashboardNavbar from "./DashboardNavbar";
import ProductList from "./ProductList";
import SpecialsList from "./SpecialsList";

export default function Dashboard() {
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
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // Update state with the new product
    setProducts([product, ...products]);
  };

  // Update products function
  const updateProduct = (prevProduct, updatedProductInfo) => {
    api
      .put(`api/products/${prevProduct._id}`, updatedProductInfo)
      .then(res => getProducts())
      .catch(err => console.log(err));
  };

  // Delete products function
  const deleteProduct = id => {
    // Delete product from database
    api
      .delete(`api/products/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
        addProduct={addProduct}
        updateProduct={updateProduct}
      />
    </div>
  );
}
