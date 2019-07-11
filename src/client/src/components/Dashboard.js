import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [state, setState] = useState({});

  useEffect(() => {
    console.log("mounted");

    fetch("/api/getMessage")
      .then(res => res.json())
      .then(res => setState({ message: res.message }));

    console.log(state);
  }, []);
  return (
    <div>
      <p>The server says {state.message}</p>
      <button onClick={() => console.log("products will go here")}>
        Console log all products
      </button>
    </div>
  );
}
