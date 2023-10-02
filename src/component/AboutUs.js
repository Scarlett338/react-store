import React from "react";
import Title from "./Title";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <img
        className="smallbanner"
        src={process.env.PUBLIC_URL + "/img/banner-s.jpg"}
        alt="Buy two get 10% off"
        width="99.99%"
        height="100%"
      />
      <Title title="About Us" />
      <div className="con">
        <h2>🌞Let's spread love, kindness and humor.🌱</h2>
        <h2>We also care...</h2>
        <p>
          Our product is made especially for you when you order. The reason for
          a slightly longer delivery time is that we want to create less waste
          than conventional manufacturing.
        </p>
        <p>
          `No overproduction, sustainable packaging (made of post-consumer
          recycled plastics / polymer mailers), thank you for making thoughtful
          purchasing decisions!`
        </p>
      </div>
    </div>
  );
}
