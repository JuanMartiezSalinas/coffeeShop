/** @format */

import React from "react";
import SingleItem from "./SingleItem";
import { FaCoffee } from "react-icons/fa";

const Container = () => {
  return (
    <>
      <section className="table-container">
        <div className="container-header">
          <h1>
            Coffeshop <FaCoffee className="container-header-logo" />
          </h1>
        </div>
        <SingleItem />
      </section>
    </>
  );
};
export default Container;
