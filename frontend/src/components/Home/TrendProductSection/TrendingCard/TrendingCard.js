import React, { useState } from "react";
import CSS from "./TrendingCard.module.css";
import { Link } from "react-router-dom";

const TrendingCard = ({ trendingproduct }) => {
  const [dilIcon, setDilIcon] = useState(false);

  const handleDilIcon = () => {
    setDilIcon(!dilIcon);
  };

  return (
    <div className={CSS["wrapper-grid"]}>
      <div className={CSS["card-container"]}>
        <div className={CSS["card-img"]}>
          <img
            className={CSS["img"]}
            src={trendingproduct.productImage}
            alt={trendingproduct.title}
          />
          <Link
            to={"/addtocart"}
            className={`${CSS["button-container"]} button-container`}
          >
            <button className={CSS["button"]}>Add to cart</button>
          </Link>
        </div>
        <div className={CSS["card-data-container"]}>
          <div className={CSS["card-data-inner-container1"]}>
            <p className={CSS["card-title"]}>{trendingproduct.title}</p>
            <i
              onClick={handleDilIcon}
              className={`${CSS["card-icon"]} ${
                dilIcon ? "fa-solid fa-heart" : "fa-regular fa-heart"
              }`}
            ></i>
          </div>
          <div className={CSS["card-data-inner-container2"]}>
            <p className={CSS["new-price"]}>${trendingproduct.newPrice}</p>
            <del className={CSS["old-price"]}>${trendingproduct.oldPrice}</del>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
