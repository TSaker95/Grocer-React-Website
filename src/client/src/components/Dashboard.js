import React, { useEffect, useState } from "react";
import { api } from "../api";

export default function Dashboard() {
  const [state, setState] = useState({});

  useEffect(() => {
    api
      .get("api/products")
      .then(result => {
        setState({ ...state, ...result.data });
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  return (
    <div>
      <p>The server says {state.message}</p>
      <button onClick={() => console.log(state)}>
        Console log all products
      </button>
    </div>
  );
}
