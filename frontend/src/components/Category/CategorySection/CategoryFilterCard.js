import React from 'react'
import CSS from './CategoryFilterCard.module.css'

const CategoryFilterCard = (props) => {
    const Category = [{
        title: "All"
    }, {
        title: "Rabbit Meat"
    }, {
        title: "Rabbit"
    }, {
        title: "Chicken"
    }, {
        title: "Chicken Meat"
    }, {
        title: "Chicken Eggs"
    },]

    const Price = [{
        title: "$0 - $50",
        min:0,
        max:50
    }, {
        title: "$50 - $100",
        min:50,
        max:100
    }, {
        title: "$150 - $200",
        min:150,
        max:200
    }, {
        title: "$250 - $300",
        min:250,
        max:300
    }, {
        title: "$300 - Above",
        min:300,
        max:50000
    }]

    const handleCategoryFilter = (e) => {
        props.filterCategory(e.target.value)
    } 
    const handlePriceFilter = (e) => {
        const price = Price.find((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
        if (price) {
            props.filterprice(price.min, price.max);
        }
    };
    

    return (
        <div>
            <div className={CSS['category-title']}>
                Categories
            </div>
            <ul className={CSS['category-list']}>
                {Category.map((value, index) => (
                    <li key={index}  className={CSS['category-list-item']}><input onClick={handleCategoryFilter} className={CSS['category-list-item-checkbox']} key={index} type='radio' value={value.title} name={'filter-value'} />{value.title}</li>
                ))}
            </ul>
            <div className={CSS['category-title']}>
                Prices
            </div>
            <ul className={CSS['category-list']}>
                {Price.map((value, index) => (
                    <li key={index}  className={CSS['category-list-item']}><input onClick={handlePriceFilter} className={CSS['category-list-item-checkbox']} key={index} type='radio' value={value.title} name={'filter-price'} />{value.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryFilterCard