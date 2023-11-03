import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  const isCarthaveItems = cartcntx.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartcntx.addItem({ ...item, quantity: 1,price:1});
  };

  const cartItemRemoveHandler = (item) => {
    cartcntx.removeItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <CartItem
        id={item.id}
          key={item.id}
          name={item.name}
          amount={item.quantity}
          price={item.price}
          onRemove={() => cartItemRemoveHandler(item)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );
  // console.log(cartcntx.items.map((item)=>item))
  //
  let amount = 0;
  cartcntx.items.forEach((item) => {
    amount = amount + Number(item.price * item.quantity);
  });
  return (
    <Modal onHideCart={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹ {amount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onClose}
        >
          Close
        </button>
        {isCarthaveItems && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;