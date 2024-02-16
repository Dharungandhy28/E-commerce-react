import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
// import { Product } from "../Shopping/product";
import { ShopContext } from "../../Context/shop-context";
import CartItem from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { CartItems, getTotalCartAmount, ClearCartItem } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const checkedout = () => {
    alert("Your product is checkout Thanks for purchasing");
    ClearCartItem();
    navigate("/");
  };
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((Product) => {
          if (CartItems[Product.id] !== 0) {
            return <CartItem data={Product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkedout();
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1>Your Cart is Empyt</h1>
      )}
    </div>
  );
};
