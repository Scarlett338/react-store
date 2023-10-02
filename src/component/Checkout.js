import React, { useContext } from "react";
import Title from "./Title";
import QuantityBtn from "./QuantityBtn";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function Checkout(props) {
  let { cartItems } = useContext(CartContext);
  //console.log(cartItems[0].name);
  let cartEmpty = cartItems.length === 0 ? true : false;
  let freeShipAmount = 50;
  let totalAmount = cartItems.reduce((total, product) => {
    return (total += product.price * product.quantity);
  }, 0);
  let discount = 0.9;
  let discountOrNot = false;
  if (totalAmount > 29.8) {
    totalAmount = totalAmount * discount;
    discountOrNot = true;
  }

  let shippingMessage =
    totalAmount > freeShipAmount
      ? "Free Shipping!"
      : `Buy $${freeShipAmount - totalAmount} more to enjoy free shipping.`;

  return (
    <div className="Checkout">
      <img
        className="smallbanner"
        src={process.env.PUBLIC_URL + "/img/banner-s.jpg"}
        alt="Buy two get 10% off"
        width="99.99%"
        height="100%"
      />
      <Title title="Checkout" />

      {!cartEmpty && (
        <div className="con">
          <div className="left col">
            {cartItems.map((product) => {
              console.log(product);
              return (
                <div key={product.id} className="left-con">
                  <div className="col2">
                    <img
                      src={process.env.PUBLIC_URL + /img/ + product.image}
                      width={150}
                      height={150}
                      alt={product.name}
                    />
                  </div>
                  <div className="col2">{product.name}</div>
                  <QuantityBtn productInfo={product} />
                </div>
              );
            })}
          </div>
          <div className="right col">
            <h2>
              Total price: ${totalAmount}
              {discountOrNot && (
                <span className="text-decor">${totalAmount / discount}</span>
              )}
            </h2>

            <p>{shippingMessage}</p>
            <button>Pay now</button>
          </div>
        </div>
      )}
      {cartEmpty && (
        <div className="con2">
          <h2>Shopping cart is empty.</h2>
          <h3>
            <Link to="/">Back to Product List </Link>
          </h3>
        </div>
      )}
    </div>
  );
}
