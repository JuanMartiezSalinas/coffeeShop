/** @format */
import { coffees } from "./data";

import React, { useState, useContext, useEffect } from "react";
// import reducer from "./reducer";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [isVisible, setIsVisible] = useState(false);
  const [selection, setSelection] = useState("");
  const [cart, setCart] = useState([]);
  let [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const toggle = (name) => {
    setSelection(name);
  };
  const confirmed = (name, price, img) => {
    const newItem = {
      id: new Date().getTime().toString(),
      title: name,
      price: price,
      img: img,
    };
    setCart([...cart, newItem]);
    setPrice(newItem.price);
    setTotal(total + parseFloat(price));
    setSelection("");
  };

  const finish = () => {
    setFinalPrice(total);
    // setTimeout(() => {}, 1000);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
      setTotal(0);
      setCart([]);
    }, 5000);
  };

  const remove = (id, price) => {
    setCart(cart.filter((item) => item.id !== id));
    setTotal(total - parseFloat(price));
  };

  return (
    <AppContext.Provider
      value={{
        isVisible,
        selection,
        toggle,
        confirmed,
        cart,
        total,
        price,
        finalPrice,
        finish,
        remove,
        setTotal,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
