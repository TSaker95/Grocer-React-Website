import React from "react";
import { api } from "../../api";

export default function specialdisplay() {
  api
    .get("/api/specials")
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });

  return <div> Yo </div>;
}
