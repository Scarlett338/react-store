import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="left">
        <Link to="/" className="logo">
          <img
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            width={100}
            height={100}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
}

/* <i class="fa-solid fa-bars"></i> */
