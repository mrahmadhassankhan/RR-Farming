import React from 'react'
import CSS from './LikeSection.module.css'
import LikeCard from './LikeCard/LikeCard'
import img1 from '../../Home/TrendProductSection/images/rabbitmeat1.jpg'
import img2 from '../../Home/TrendProductSection/images/rabbitmeat2.jpg'
import img3 from '../../Home/TrendProductSection/images/rabbitmeat3.jpg'
import img4 from '../../Home/TrendProductSection/images/rabbit2.jpg'

const LikeSection = () => {
    const LikeCardata = [{
        title: "Rabbit meat",
        price: 19.65,
        img: img1
    },
    {
        title: "Ceramic rabbit bowl",
        price: 12.99,
        img: img2
    },{
        title: "Comfy rabbit cushion",
        price: 23.67,
        img: img3
    },{
        title: "Cool summer shades",
        price: 11.35,
        img: img4
    }]
    return (
        <div className={`${CSS['container-fluid']} container-fluid`}>
            <div className='container'>
                <h1 className={CSS['like-title']}>You might also like</h1>
                {LikeCardata.map((item, index) => (
                    <LikeCard key={index} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default LikeSection