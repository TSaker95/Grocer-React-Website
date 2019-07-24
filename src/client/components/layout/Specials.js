import React, { useState, useEffect } from "react";
import Specialdisplay from "./specialdisplay";
import { api } from "../../api";

export default function Specials() {
  // const [specials, setSpecials] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [detailedSpecials, setDetailedSpecials] = useState([]);

  // useEffect(() => {
  //   api
  //     .get("/api/specials")
  //     .then(res => setSpecials([...res.data]))
  //     .catch(err => console.log(`Error: ${err}`));

  //   api.get("/api/products").then(res => setProducts([...res.data]));
  // }, []);

  // const findProduct = productId => {
  //   console.log(productId);
  //   return products.find(product => product._id === productId);
  // };

  // useEffect(() => {
  //   const items = [];
  //   specials.forEach(special => {
  //     products.forEach(product => {
  //       if (special.productId === product._id) {
  //         const saleItem = {
  //           product,
  //           salePrice: special.salePrice
  //         };
  //         items.push(saleItem);
  //       }
  //     });
  //   });
  //   setSpecials([...items]);
  // }, [products]);

  return (
    <div>
      <div className="hpsectiond">
        <h1> Specials </h1>
        {/* {specials.map(special => (
          <Specialdisplay product={findProduct(special.productId)} />
        ))} */}
      </div>
    </div>
  );
}
