import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="Footer">
      <div className="col">
        <Link to="/" className="logo">
          <img
            src={process.env.PUBLIC_URL + "/img/logo2.png"}
            width={100}
            height={100}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="col">
        <p>Copywrite © 2023 by Pixel Mate</p>
      </div>
    </div>
  );
}
