import React, { useEffect, useState } from "react";
import editIcon from "../../public/images/edit.svg";
import deleteIcon from "../../public/images/delete.svg";

export default function SpecialsItem(props) {
  const parseDate = date => date.split("T")[0];

  return (
    <div className="specials-item list-row">
      <p>{props.product.name}</p>
      <p>${props.product.price}</p>
      <p>Sale price</p>
      <p>{parseDate(props.item.startDate)}</p>
      <p>{parseDate(props.item.endDate)}</p>
      <div className="icons">
        <img src={editIcon} />
        <img src={deleteIcon} />
      </div>
    </div>
  );
}
