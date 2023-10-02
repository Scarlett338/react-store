import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import QuantityBtn from "./QuantityBtn";

export default function ProductList(props) {
  let productlist = [
    {
      id: 1,
      name: `"Nothing Can Hurt Me Except My Cat", 8 Bit Pixel Funny Cute Cat T-Shirt`,
      price: 29.8,
      image: "1catt.png",
      image2: null,
      descriptionh1: `😻Customers' favorite!`,
      descriptionp: `😼100% ring-spun cotton, soft and comfy
  😼153 g/m²
  😹The printing effect may look frosted, magically add more fun to the design. `,
    },
    {
      id: 2,
      name: `"Nothing Can Hurt Me Except My Cat", 8 Bit Pixel Funny Cute Cat Coffee Mug`,
      price: 29.8,
      image: "1cata.png",
      image2: "1catb.png",
      descriptionh1: `😼: "Meowwwwww!"
      (Translation: Super gift for coffee and cat lovers!)`,
      descriptionp: [
        `😼Dishwasher and microwave safe`,
        `
      😼11oz, 3.79″in height, 3.25″in diameter`,
      ],
    },
    {
      id: 3,
      name: `“Nothing Can Take My Time Except My Dog” 8 Bit Pixel Cute Dog T Shirt, Funny Naughty Dog, Dog Lover Gift, Labrador Retriever T shirt, Fun Quote Tee`,
      price: 29.8,
      image: "2dogt.jpg",
      descriptionh1: `🐶$53.64 for two T-shirts!`,
      descriptionp: [
        `🐶100% ring-spun cotton, soft and comfy`,
        `🐶153 g/m²`,
        `🐶The printing effect may look frosted, magically add more fun.`,
      ],
    },
    {
      id: 4,
      name: `"Nothing Can Take My Time Except My Dog" 8 Bit Pixel Labrador Retriever Coffee Mug. Coffee Lover Gift, Dog Mom, Cute Dog Mug, Lovely Dog`,
      price: 29.8,
      image: "2doga.jpg",
      image2: "2dogb.jpg",
      descriptionh1: `🐶: "Super gift for coffee and dog lovers!”`,
      descriptionp: `🐶 Dishwasher and microwave safe
      🐶 11oz, 3.79″in height, 3.25″in diameter`,
    },
    /*     {
      id: 5,
      name: ``,
      price: 29.8,
      image: "",
      descriptionh1: ``,
      descriptionp: ``,
    },
    {
      id: 6,
      name: ``,
      price: 29.8,
      image: "",
      descriptionh1: ``,
      descriptionp: ``,
    }, */
  ];

  const handleToTheTop = () => {
    console.log("top");
  };

  return (
    <div className="ProductList" id="top">
      <div className="banner">
        <img
          src={process.env.PUBLIC_URL + "/img/banner.jpg"}
          width={1080}
          alt="Banner"
        />
      </div>
      <Title title="Only pet lovers truly understand." />
      <div className="con">
        {productlist.map((product) => (
          <div key={product.id} className="productCard">
            <Link to={"/product/" + product.id}>
              <img
                src={process.env.PUBLIC_URL + /img/ + product.image}
                width={300}
                height={300}
                alt="product"
              />
            </Link>
            <h3>{product.name}</h3>
            <p>USD ${product.price}</p>
            <QuantityBtn productInfo={product} />
          </div>
        ))}
      </div>
      <div className="homeButton">
        {/*         <Link to={"/" + "#top"}> */}
        <i class="fa-solid fa-angle-up" onClick={handleToTheTop}>
          {" "}
        </i>
        {/*         </Link> */}
      </div>
    </div>
  );
}
