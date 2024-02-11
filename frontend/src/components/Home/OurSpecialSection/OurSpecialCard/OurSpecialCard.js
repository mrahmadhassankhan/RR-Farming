import React from 'react';
import CSS from './OurSpecialCard.module.css';

const OurSpecialCard = (props) => {
    return (
        <div className={CSS['special-container']}>
            <div className={CSS['card-img']}>
                <img className={CSS['img']} src={props.img} alt='Rabbit' />
                <div className={`${CSS['button-container']} button-container`}>
                    <p className={CSS['title']}>{props.title}</p>
                    <p className={CSS['para']}>{props.subtitle}</p>
                    <button className={CSS['button']} onClick={() => alert('Button Clicked')}>
                        {props.button}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurSpecialCard;
