import React from "react";

export default function ProductItem(props) {
  console.log(props);
  return <li>{props.item.name}</li>;
}
