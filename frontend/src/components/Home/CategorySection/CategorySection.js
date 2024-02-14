import React from 'react'
import CSS from './CategorySection.module.css'
import { Link } from 'react-router-dom'
import rabbit1 from '../../../images/rabbit1.jpg'
import rabbit2 from '../../../images/rabbit2.jpg'
import rabbit3 from '../../../images/rabbit3.jpg'
import rabbitmeat1 from '../../../images/rabbitmeat1.jpg'
import rabbitmeat2 from '../../../images/rabbitmeat2.jpg'

const CategorySection = () => {
    const CategoryArray = [{
        title: "Rabbit Angora",
        img: rabbit1
    }, {
        title: "Rabbit Lionhead",
        img: rabbit2
    }, {
        title: "Rabbit Belgian ",
        img: rabbit3
    }, {
        title: "Angora Meat",
        img: rabbitmeat1
    },{
        title: "Belgian Meat",
        img: rabbitmeat2
    }];
    return (
        <div className='container'>
            <h3 className={CSS['category-title']}>Categories</h3>
            {CategoryArray.map((category, index) => (
                <div key={index} className={CSS['category-container']}>
                    <Link className={CSS['category-link']} to={`/category`} key={index}>
                        <div className={CSS['category-data']} key={index}>
                            <h6 className={CSS['category-subtitle']}>{category.title}</h6>
                            <img className={CSS['category-img']} src={category.img} alt={category.title} />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default CategorySection