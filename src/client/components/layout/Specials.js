import React, { useState, useEffect } from "react";
import Specialdisplay from "./specialdisplay";
import { api } from "../../api";

export default function Specials() {
  const [specials, setSpecials] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/api/specials")
      .then(res => setSpecials([...res.data]))
      .catch(err => console.log(`Error: ${err}`));

    api.get("/api/products").then(res => setProducts([...res.data]));
  }, []);

  const findProduct = productId => {
    return products.find(product => product._id === productId);
  };

  return (
    <div style={{ display: specials.length ? "" : "none" }}>
      <div className="hpsectiond">
        <h1> Specials </h1>
        {products.length ? (
          specials.map(special => (
            <Specialdisplay
              product={findProduct(special.productId)}
              special={special}
            />
          ))
        ) : (
          <p>None</p>
        )}
      </div>
    </div>
  );
}
