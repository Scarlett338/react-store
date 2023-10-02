import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export default function QuantityBtn({ productInfo }) {
  let { cartItems, setCartItems } = useContext(CartContext);
  let productIndexInCart = cartItems.findIndex((e) => {
    return e.id === productInfo.id;
  });
  let [numInCart, setNumInCart] = useState(
    productIndexInCart === -1 ? 0 : cartItems[productIndexInCart].quantity
  );
  const handleAdd = () => {
    if (productIndexInCart === -1) {
      let newArr = [...cartItems];
      newArr.push({
        id: productInfo.id,
        name: productInfo.name,
        price: productInfo.price,
        image: productInfo.image,
        description: productInfo.description,
        quantity: 1,
      });
      setCartItems(newArr);
    } else {
      let newArr = [...cartItems];
      newArr[productIndexInCart].quantity++;
      setCartItems(newArr);
    }
    console.log(productIndexInCart);
    setNumInCart(numInCart + 1);
  };

  const handleSubtract = () => {
    if (cartItems[productIndexInCart].quantity === 1) {
      let newArr = [...cartItems];
      newArr.splice(productIndexInCart, 1);
      setCartItems(newArr);
    } else {
      let newArr = [...cartItems];
      newArr[productIndexInCart].quantity--;
      setCartItems(newArr);
    }
    console.log(productIndexInCart);
    setNumInCart(numInCart - 1);
  };

  return (
    <div className="QuantityBtn">
      {numInCart === 0 ? (
        <button onClick={handleAdd}>Add to Cart</button>
      ) : (
        <div>
          <button className="smallButton" onClick={handleSubtract}>
            -
          </button>
          {numInCart} pc
          <button className="smallButton" onClick={handleAdd}>
            +
          </button>
        </div>
      )}
    </div>
  );
}

// 查入面有冇此product
