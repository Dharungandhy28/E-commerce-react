import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";

const CartItem = (props) => {
  console.log(props);
  const { id, productName, price, productImage } = props.data;
  const { CartItems, addToCart, DeleteFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => DeleteFromCart(id)}> - </button>
          <input
            value={CartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
