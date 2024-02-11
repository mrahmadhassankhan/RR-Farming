import React from 'react';
import CSS from './OurSpecialCard.module.css';
import { Link } from 'react-router-dom';

const OurSpecialCard = (props) => {
    return (
        <div className={CSS['special-container']}>
            <div className={CSS['card-img']}>
                <img className={CSS['img']} src={props.img} alt='Rabbit' />
                <div className={`${CSS['button-container']} button-container`}>
                    <p className={CSS['title']}>{props.title}</p>
                    <p className={CSS['para']}>{props.subtitle}</p>
                    <Link to={'/addtocart'}>
                        <button className={CSS['button']} >{props.button}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurSpecialCard;
