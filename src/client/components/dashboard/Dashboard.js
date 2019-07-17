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
  const deleteProduct = productId => {
    // Delete product from database
    api
      .delete(`api/products/${productId}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    // Rerender list with all products where id does not equal the id of deleted product
    setProducts(products.filter(product => product._id !== productId));
  };

  const addSpecial = special => {
    api
      .post("/api/specials", special)
      .then(res => {
        setSpecials([special, ...specials]);
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const updateSpecial = () => {};

  const deleteSpecial = specialId => {
    api
      .delete(`/api/specials/${specialId}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    setSpecials(specials.filter(special => special._id !== specialId));
  };

  return (
    <div className="container">
      <DashboardNavbar />
      <SpecialsList
        specials={specials ? specials : []}
        products={products ? products : []}
        addSpecial={addSpecial}
        deleteSpecial={deleteSpecial}
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
