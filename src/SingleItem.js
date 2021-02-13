/** @format */

import React from "react";
import { coffees } from "./data";
import { useGlobalContext } from "./context";
const SingleItem = () => {
  const { toggle } = useGlobalContext();
  return coffees.map((item, index) => {
    return (
      <article key={index}>
        <img
          src={item.img}
          alt={item.name}
          onClick={() => toggle(item.name)}></img>
      </article>
    );
  });
};
export default SingleItem;
