import React, { useState } from 'react'
import CSS from './CheckOutCard.module.css'

const CheckOutCard = ({CartItem,onRemove }) => {
    const [quantity, setQuantity] = useState(CartItem.quantity);

    const handleIncreseQuantity = () => {
        if(quantity<25){
            setQuantity(quantity+1)
        }
    }
    const handleDecreseQuantity = () => {
        if(quantity>0){
            setQuantity(quantity-1)
        }  
    }

    const hanldeRomveData = (e) => {
        e.preventDefault();
        onRemove(CartItem.id);
    }
    return (
        <div className={CSS['cart-container']} >
            <div className={CSS['cart-detail-container']} >
                <div className={CSS['cart-img']}>
                    <img src={CartItem.img} alt='img' className={CSS['img']}/>
                </div>
                <div className={CSS['cart-detail']}>
                   <h3 className={CSS['cart-title']}>{CartItem.title}</h3>
                   <h5 className={CSS['cart-price']}>${CartItem.price}</h5>
                </div>
            </div>
            <div className={CSS['cart-quantity-container']} >
                <p className={CSS['cart-quantity']} >Quantity: {quantity}</p>
                <div className={CSS['cart-sign']} >
                    <i onClick={handleDecreseQuantity} className={`${CSS['cart-sign-negative']} fa-solid fa-minus`}></i>
                    <i onClick={handleIncreseQuantity} className={`${CSS['cart-sign-positive']} fa-solid fa-plus`}></i>
                </div>
            </div>
            <div className={CSS['cart-remove-button-container']} >
                <form className={CSS['cart-remove-from']} onSubmit={hanldeRomveData}>
                    <button className={CSS['cart-remove-btn']} type='submit'>Remove</button>
                </form>
            </div>
        </div>
    )
}

export default CheckOutCard





