/** @format */

import React from "react";
import { useGlobalContext } from "./context";
import Ticket from "./Ticket";
import { FaTrash } from "react-icons/fa";

const Details = () => {
  const {
    cart,
    finish,
    isVisible,
    remove,
    total,
    setTotal,
  } = useGlobalContext();

  console.log(cart);
  return (
    <section className="details-section">
      <div className="display">
        <h1 style={{ textAlign: "center", marginTop: "5px" }}>your Items</h1>
        {cart.map((item, index) => {
          const { title, price, id } = item;
          console.log(id);
          return (
            <article className="name-price" key={index}>
              <h4>{title}</h4>
              <p>$ {price}</p>
              <button className="btn-trash" onClick={() => remove(id, price)}>
                <FaTrash />
              </button>
            </article>
          );
        })}
      </div>
      {cart.length > 0 && (
        <button className="btn finish-btn" onClick={finish}>
          Finish purchase
        </button>
      )}
      {isVisible && <Ticket />}
    </section>
  );
};
export default Details;
