import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart, children }) => {
  let quantity = 0;
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }

  const tax = total / 10;
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h3 className="heading">Order Summary</h3>
      <div className="cart-details">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: $ {total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
      </div>
      <div className="buttons">
        <button onClick={clearCart} className="clear-cart-btn">
          <span>Clear Cart</span>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
      {children}
    </div>
  );
};

export default Cart;
