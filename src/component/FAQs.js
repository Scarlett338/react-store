import React from "react";
import FAQ from "./FAQ";
import Title from "./Title";

export default function FAQs() {
  return (
    <div className="FAQs">
      <img
        className="smallbanner"
        src={process.env.PUBLIC_URL + "/img/banner-s.jpg"}
        alt="Buy two get 10% off"
        width="99.99%"
        height="100%"
      />
      <Title title={"FAQs"} />
      <div className="con">
        <FAQ
          q={"Q: How long will it take to receive my order?"}
          ans={`😼Fulfilment: 2-5 business days, an email with tracking number will be sent to you 
      🐶Delivery (standard):
      📦US/EU: 1-2 weeks (Current average: 3-7 Days)
      📦Worldwide: Up to 4 weeks
      **Please trust the process. 
      **The estimated delivery time is only an estimate but not a guarantee.
      **Please contact us if products have not been delivered 7 business days after the estimated delivery date runs out. `}
        />
        <FAQ
          q={"Q: What is the shipping rate?"}
          ans={`📦 US, UK, Canada, Australia: 
      🆓FREE SHIPPING❗ `}
        />
        <FAQ
          q={"Q: In which case you accept exchanges?"}
          ans={`⭕All merch is custom-printed to order and is considered final sale.
      ⭕Claims deemed an error on our part are covered at our expense.`}
        />
        <FAQ
          q={"Q: Why choose your design?"}
          ans={`💪🏻support small business
      🎨unique art pieces heal you`}
        />
      </div>
    </div>
  );
}
