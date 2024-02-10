import React from 'react'
import CSS from './CategorySection.module.css'
import { Link } from 'react-router-dom'
import img from '../../../images/rabbit.jpg'

const CategorySection = () => {
    const CategoryArray = [{
        title: "Rabbit Meat",
        img: img
    }, {
        title: "Rabbit Meat",
        img: img
    }, {
        title: "Rabbit Meat",
        img: img
    }, {
        title: "Rabbit Meat",
        img: img
    }, {
        title: "Rabbit Meat",
        img: img
    }, {
        title: "Rabbit Meat",
        img: img
    }, {
        title: "Rabbit Meat",
        img: img
    },{
        title: "Rabbit Meat",
        img: img
    }, {
        title: "Rabbit Meat",
        img: img
    },{
        title: "Rabbit Meat",
        img: img
    }];
    return (
        <div className='container'>
            <h3 className={CSS['category-title']}>Categories</h3>
            {CategoryArray.map((category, index) => (
                <div key={index} className={CSS['category-container']}>
                    <Link className={CSS['category-link']} to={`/category/${index}`} key={index}>
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