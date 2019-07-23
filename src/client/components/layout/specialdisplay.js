import React from "react";
import { api } from "../../api";

export default function specialdisplay(props) {
  console.log(props);
  return (
    <div style={{ color: "#fff", height: "100px" }}>{props.product.name}</div>
  );
}
