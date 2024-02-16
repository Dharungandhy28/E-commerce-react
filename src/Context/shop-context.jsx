import React, { createContext, useState } from "react";
import { PRODUCTS } from "../Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [CartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        let iteminfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += CartItems[item] * iteminfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    console.log(itemId);
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const DeleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const ClearCartItem = () => {
    setCartItems(getDefaultCart());
  };
  const contextvalue = {
    CartItems,
    addToCart,
    DeleteFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    ClearCartItem,
  };

  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};
