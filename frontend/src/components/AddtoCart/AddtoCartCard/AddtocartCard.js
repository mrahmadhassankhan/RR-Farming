import React, { useState } from 'react'
import CSS from './AddtocartCard.module.css'
import img from '../../Home/TrendProductSection/images/rabbit1.jpg'
import { Link } from 'react-router-dom'

const AddtocartCard = () => {
    const [quantity, setQuantity] = useState(0);

    const handleInputData = (event) => {
        if (event.target.value > -1 && event.target.value < 25) {
            setQuantity(event.target.value);
        }
    }

    const handleSubmitForm = (event) => {
        event.preventDefaulf();
    }

    return (
        <div className={`${CSS['container']} container`}>
            <div className={CSS['grid-container']}>
                <div className={CSS['img-container']}>
                    <img className={CSS['img']} src={img} alt='rabbit' />
                </div>
                <div className={CSS['data-container']}>
                    <h2 className={CSS['addtocart-title']}>Heated rabbit meat</h2>
                    <p className={CSS['addtocart-reviews']}>(4.8/5, 12 reviews)</p>
                    <h4 className={CSS['addtocart-new-price']}>Rs. 15.49 <del className={CSS['addtocart-old-price']}>Rs. 28.65</del></h4>
                    <p className={CSS['addtocart-details']}>A one of a kind heated rabbit meat and vegetables, including a delicious taste and warming features.</p>
                    <div className={CSS['addtocart-quantity']}>
                        Qty: <input required min={'0'} max={'20'} type='number' name='quantity' className={CSS['addtocart-qty-input']} placeholder='0' value={quantity} onChange={handleInputData} />
                    </div>
                    <Link to={'/checkout'} className={CSS['addtocart-link']}>
                        <form onSubmit={handleSubmitForm}>
                            <button type='submit' className={CSS['addtocart-link-btn']}>Add to cart</button>
                        </form>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AddtocartCard