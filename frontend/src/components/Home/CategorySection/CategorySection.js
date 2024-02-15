import React, { useState, useEffect } from 'react'
import CSS from './CategorySection.module.css'
import { Link } from 'react-router-dom'
import rabbit1 from '../../../images/rabbit1.jpg'
import rabbit2 from '../../../images/rabbit2.jpg'
import rabbit3 from '../../../images/rabbit3.jpg'
import rabbitmeat1 from '../../../images/rabbitmeat1.jpg'
import rabbitmeat2 from '../../../images/rabbitmeat2.jpg'
import axios from "axios";

const CategorySection = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:1783/api/getcategory")
            .then((res) => {
                console.log(res.data);
                setCategories(res.data);
            })
            .catch((err) => console.error(err));
    }, []);
    return (
        <div className='container'>
            <h3 className={CSS['category-title']}>Categories</h3>
            {categories.map((category, index) => (
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