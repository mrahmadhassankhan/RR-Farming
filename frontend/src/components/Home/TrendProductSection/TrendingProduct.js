import React, { useEffect, useState } from "react";
import CSS from "./TrendingProduct.module.css";
import TrendingCard from "./TrendingCard/TrendingCard";
import rabbit1 from "./images/rabbit1.jpg";
import rabbit2 from "./images/rabbit2.jpg";
import rabbit3 from "./images/rabbit3.jpg";
import rabbitmeat1 from "./images/rabbitmeat1.jpg";
import rabbitmeat2 from "./images/rabbitmeat2.jpg";
import rabbitmeat3 from "./images/rabbitmeat3.jpg";
import axios from "axios";
const TrendingProduct = () => {
  const [trendingproducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/gettrendingproducts")
      .then((res) => {
        console.log(res.data);

        setTrendingProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  // const trendingproduct = [
  //   {
  //     title: "rabbit Angora",
  //     newPrice: 13.99,
  //     oldPrice: 21.99,
  //     img: rabbit1,
  //   },
  //   {
  //     title: "rabbit Belgian",
  //     newPrice: 19.99,
  //     oldPrice: 30.99,
  //     img: rabbit2,
  //   },
  //   {
  //     title: "rabbit Flemish",
  //     newPrice: 8.99,
  //     oldPrice: 13.99,
  //     img: rabbit3,
  //   },
  //   {
  //     title: "Flemish rabbit Meat",
  //     newPrice: 6.39,
  //     oldPrice: 11.99,
  //     img: rabbitmeat1,
  //   },
  //   {
  //     title: "rabbit Meat",
  //     newPrice: 12.9,
  //     oldPrice: 17.99,
  //     img: rabbitmeat2,
  //   },
  //   {
  //     title: "Angora rabbit Meat",
  //     newPrice: 9.21,
  //     oldPrice: 12.99,
  //     img: rabbitmeat3,
  //   },
  // ];
  return (
    <div>
      <div className={CSS["trending-products-div"]}>
        <p className={CSS["trending-products-title"]}>Trending Products</p>
      </div>
      {trendingproducts.map((trendingproduct) => (
        <TrendingCard
          key={trendingproduct._id}
          trendingproduct={trendingproduct}
        />
      ))}
    </div>
  );
};

export default TrendingProduct;
