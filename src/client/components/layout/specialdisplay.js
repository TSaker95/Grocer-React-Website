import React from "react";
import { api } from "../../api";

export default function specialdisplay(props) {
  const { salePrice, startDate, endDate } = props.special;
  const { name, price } = props.product;
  // console.log(salePrice, startDate, endDate, name, price);
  return <div style={{ color: "#fff" }}>{name}</div>;
}
