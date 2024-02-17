import React from 'react';
import CSS from './OurSpecialCard.module.css';
import { Link } from 'react-router-dom';

const OurSpecialCard = ({ item }) => {
    const handleCardClick = () => {
        const itemDetails = {
            title: item.title,
            newPrice: item.newPrice,
            oldPrice: item.oldPrice,
            img: item.img,
        };
        sessionStorage.setItem("clickedItem", JSON.stringify(itemDetails));
    };

    return (
        <div className={CSS['special-container']} >
            <div className={CSS['card-img']}>
                <img className={CSS['img']} src={item.img} alt='Rabbit' />
                <div className={`${CSS['button-container']} button-container`}>
                    <p className={CSS['title']}>{item.title}</p>
                    <p className={CSS['para']}>{item.subtitle}</p>
                    <Link to={'/addtocart'}>
                        <button onClick={handleCardClick} className={CSS['button']} >{item.button}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurSpecialCard;
