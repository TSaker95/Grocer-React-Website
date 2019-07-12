import React, { useEffect, useState } from "react";
import { api } from "../../api";

export default function SpecialsItem(props) {
  const parseDate = date => {
    return date.split("T")[0];
  };

  return (
    <div className="specials-item list-row">
      <p>{props.product.name}</p>
      <p>Normal price</p>
      <p>Sale price</p>
      <p>{parseDate(props.item.startDate)}</p>
      <p>{parseDate(props.item.endDate)}</p>
      <p>Actions go here</p>
    </div>
  );
}
