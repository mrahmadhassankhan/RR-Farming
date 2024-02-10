import React from 'react';
import CSS from './OurSpecialCard.module.css';

const OurSpecialCard = (props) => {
    return (
        <div className={CSS['special-container']}>
            <div className={CSS['card-img']}>
                <img className={CSS['img']} src={props.img} alt='Rabbit' />
                <div className={`${CSS['button-container']} button-container`}>
                    <button className={CSS['button']} onClick={() => alert('Button Clicked')}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurSpecialCard;
