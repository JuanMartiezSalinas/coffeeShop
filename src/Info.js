/** @format */

import React from "react";
import { coffees } from "./data";
import { useGlobalContext } from "./context";
const Info = () => {
  const { selection, confirmed } = useGlobalContext();
  console.log(selection);
  let object = {};
  return (
    <section className="info-section">
      {(object = coffees.filter((item) => item.name === selection)).map(
        (item, index) => {
          return (
            <article key={index}>
              <img src={item.img} alt={item.name}></img>
              <div className="algo">
                <h2 className="title">{item.name}</h2>
                {item.ingredients.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
                <p className="coffee-price">$ {item.price}</p>
                <button
                  className="btn selection-btn"
                  onClick={() => confirmed(item.name, item.price, item.img)}>
                  Confirm Selection
                </button>
              </div>
            </article>
          );
        }
      )}
    </section>
  );
};
export default Info;
