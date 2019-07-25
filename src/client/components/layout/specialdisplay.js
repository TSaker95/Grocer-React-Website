import React from "react";

export default function specialdisplay(props) {
  const { salePrice, startDate, endDate } = props.special;
  const { name, price } = props.product;
  console.log(props);
  // console.log(salePrice, startDate, endDate, name, price);
  return (
    <div className="specialcontentbox" style={{ color: "#fff" }}>
      <p className="specialcontentlist">
        {name} <li /> Down from: $ {price} <li /> To: $ {salePrice} <li />
        From: {startDate.split("T")[0]} <li /> Till: {endDate.split("T")[0]}
      </p>
    </div>
  );
}
