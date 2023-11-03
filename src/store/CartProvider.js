import React, { useState } from "react";
import CartContext from "./cart-context";

const CardProvider = (props) => {
  const [items, setItems] = useState([]);

  const totalAmount = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const addItemToCardHandler = (item) => {
   setItems([...items,item])
  };

  const removeItemFromCartHandler = (item) => {
   
  };

  const cartContext = {
    items: items,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCartHandler,
    totalAmount: totalAmount,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CardProvider;