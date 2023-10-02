import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Title from "./Title";
import QuantityBtn from "./QuantityBtn";
import { CartContext } from "./CartContext";

export default function ProductDetail(props) {
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

  //  let allSize = ["S", "M", "L", "XL", "2XL"];
  // let [size, setSize] = useState("S");
  let params = useParams();
  let [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    let productInfo = productlist.find((e) => {
      return e.id === parseInt(params.id);
    });
    console.log(productInfo);
    setProductDetail(productInfo);
  }, []);

  const handleImageZoomIn = (e) => {
    // 未識
    console.log("zoom");
  };

  return (
    <div className="ProductDetail">
      <img
        className="smallbanner"
        src={process.env.PUBLIC_URL + "/img/banner-s.jpg"}
        alt="Buy two get 10% off"
        width="99.99%"
        height="100%"
      />
      <Title title="Product Information" />
      {productDetail && (
        <div className="con">
          <div className="col">
            <img
              src={process.env.PUBLIC_URL + /img/ + productDetail.image}
              alt={productDetail.name}
              width={500}
              height={500}
              onMouseOver={handleImageZoomIn}
            />
          </div>
          <div className="col">
            <h2>{productDetail.name}</h2>
            <p>USD ${productDetail.price} </p>
            <span>Size</span>
            {/* 
            <select name="size">
              {allSize.map((allsize) => (
                <option
                  value={allsize}
                  onChange={(allsize) => setSize(allsize)}
                >
                  {allsize}
                </option>
              ))}
            </select> */}

            <h2>{productDetail.descriptionh1}</h2>
            <p>{productDetail.descriptionp}</p>
            <QuantityBtn productInfo={productDetail} />
            <div>
              <button>
                <Link to="/checkout">Pay Now</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* 
未識取SIZE 
放大圖
*/
