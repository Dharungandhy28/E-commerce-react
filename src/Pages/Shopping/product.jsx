import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, CartItems } = useContext(ShopContext);

  const CartItemAmount = CartItems[id];
  // const addToCart = (id) => {};
  // const CartItemAmount = 100;
  return (
    <div className="product">
      <div className="product-img-container">
        <img src={productImage} />
      </div>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {CartItemAmount > 0 && <>({CartItemAmount})</>}
      </button>
    </div>
  );
};
