/** @format */

import React from "react";
import { FaCoffee } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Ticket = () => {
  const { cart, total } = useGlobalContext();
  console.log(total);
  return (
    <section className="ticket-section">
      <div className="ticket-header">
        <h1>
          Coffeshop <FaCoffee />
        </h1>
      </div>
      <div>
        {cart.map((item, index) => {
          return (
            <div className="ticket-info" key={index}>
              <p>{item.title}</p>
              <p> ....... </p>
              <p className="ticket-price">$ {item.price}</p>
            </div>
          );
        })}
        <p className="ticket-total">$ {total}</p>
      </div>
    </section>
  );
};
export default Ticket;
