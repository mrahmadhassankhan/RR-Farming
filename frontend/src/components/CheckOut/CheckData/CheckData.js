import React,{useState} from 'react'
import CSS from './CheckData.module.css'
import { Link } from 'react-router-dom'
import CheckOutCard from './CheckOutCard/CheckOutCard'
import rabbitmeat from '../../Home/TrendProductSection/images/rabbitmeat1.jpg'
import rabbit from '../../Home//TrendProductSection/images/rabbit1.jpg'
import rabbitmeat2 from '../../Home/TrendProductSection/images/rabbitmeat2.jpg'
import rabbit2 from '../../Home//TrendProductSection/images/rabbit2.jpg'


const CheckData = () => {
    const [CartObject, setCartItems] = useState([{
        id:1,
        title: "Rabbit Balgain",
        price: 24.90,
        quantity: 9,
        img: rabbit
    }, {
        id:2,
        title: "Angora Meat",
        price: 67.90,
        quantity: 5,
        img: rabbitmeat
    },
    {
        id:3,
        title: "Rabbit Balgain",
        price: 24.90,
        quantity: 1,
        img: rabbit2
    }, {
        id:4,
        title: "Angora Meat",
        price: 67.90,
        quantity: 2,
        img: rabbitmeat2
    }])

    const handleRemoveItem = (itemId) => {
        const updatedCartItems = CartObject.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    }
    return (
        <div className={`${CSS['container-fluid']} container-fluid`}>
            <div className='container'>
                <Link className={CSS['back-link']} to={'/addtocart'}>
                    <i className={`${CSS['back-icon']} fa-solid fa-backward`}></i>
                    <span className={CSS['back']} >Back</span>
                </Link>
                <h2 className={CSS['my-cart']} >My Cart</h2>
                {CartObject.map((item, index) => (
                    <CheckOutCard key={item.id} CartItem={item} onRemove={handleRemoveItem} />
                ))}

                <div className={CSS['containter-checkbox']}>
                    <input className={CSS['checkbox1']} type='checkbox' name='term1' />
                    <p className={CSS['checkbox-details1']}>Buying as a Gift? Tick here to include gift wrapping.</p>
                </div>
                <div className={CSS['containter-checkbox']}>
                    <input className={CSS['checkbox2']} type='checkbox' name='term2' />
                    <p className={CSS['checkbox-details2']}>Do you want to subscribe to our newletter for limited offers and promotion?</p>
                </div>
                <div className={CSS['containter-checkbox']}>
                    <input className={CSS['checkbox3']} type='checkbox' name='term3' />
                    <p className={CSS['checkbox-details3']}>Agree to the Term and Condition?</p>
                </div>
                <div>
                    <Link to={''}>
                        <button className={CSS['payment-btn']}>Proceed to Payment</button>
                    </Link>
                    <Link to={'/'}>
                        <button className={CSS['back-shop-btn']}>Back to Shop</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CheckData


// className={CSS['']} 




