import React, { useState, useEffect } from 'react'
import CSS from './AddtocartCard.module.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddtocartCard = () => {
    const [quantity, setQuantity] = useState(0);
    const [clickedItem, setClickedItem] = useState({});

    useEffect(() => {
        const storedItemDetails = sessionStorage.getItem('clickedItem');
        const parsedItemDetails = storedItemDetails ? JSON.parse(storedItemDetails) : null;
        setClickedItem(parsedItemDetails);
    }, []);

    const handleInputData = (event) => {
        if (event.target.value > -1 && event.target.value < 25) {
            setQuantity(event.target.value);
        }
    }
    const handleBuyNow = (e) => {
        e.preventDefault();
    }
    return (
        <div className={`${CSS['container']} container`}>
            <div className={CSS['grid-container']}>
                <div className={CSS['img-container']}>
                    <img className={CSS['img']} src={clickedItem.img} alt='rabbit' />
                </div>
                <div className={CSS['data-container']}>
                    <h2 className={CSS['addtocart-title']}>{clickedItem.title}</h2>
                    <p className={CSS['addtocart-reviews']}>(4.8/5, 12 reviews)</p>
                    <h4 className={CSS['addtocart-new-price']}>Rs. {clickedItem.newPrice} <del className={CSS['addtocart-old-price']}>Rs. {clickedItem.oldPrice}</del></h4>
                    <p className={CSS['addtocart-details']}>A one of a kind heated rabbit meat and vegetables, including a delicious taste and warming features.</p>
                    <div className={CSS['addtocart-quantity']}>
                        Qty: <input required min={'0'} max={'20'} type='number' name='quantity' className={CSS['addtocart-qty-input']} placeholder='0' value={quantity} onChange={handleInputData} />
                    </div>
                    <Link to={'/checkout'} className={CSS['addtocart-link']}>
                        <button type='submit' onClick={handleBuyNow} className={CSS['addtocart-link-btn']}>Buy now</button>
                    </Link>
                    <button type='submit' onClick={() => toast.success('Item Added to Cart')} className={CSS['addtocart-link-btn']}>Add to cart</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default AddtocartCard