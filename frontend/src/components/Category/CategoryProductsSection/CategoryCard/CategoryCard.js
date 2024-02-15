import React,{useState} from 'react'
import CSS from './CategoryCard.module.css'
import { Link } from 'react-router-dom';

const CategoryCard = ({item}) => {
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
            src={item.img}
            alt={item.title}
          />
          <Link
            to={"/addtocart"}
            className={`${CSS["button-container"]} button-container`}
          >
            <button className={CSS["button"]}>Buy</button>
          </Link>
        </div>
        <div className={CSS["card-data-container"]}>
          <div className={CSS["card-data-inner-container1"]}>
            <p className={CSS["card-title"]}>{item.title}</p>
            <i
              onClick={handleDilIcon}
              className={`${CSS["card-icon"]} ${
                dilIcon ? "fa-solid fa-heart" : "fa-regular fa-heart"
              }`}
            ></i>
          </div>
          <div className={CSS["card-data-inner-container2"]}>
            <p className={CSS["new-price"]}>Rs. {item.newPrice}</p>
            <del className={CSS["old-price"]}>Rs. {item.oldPrice}</del>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard