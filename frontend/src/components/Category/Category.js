import React, { useState } from 'react';
import CSS from './Category.module.css';
import CategoryFilterCard from './CategorySection/CategoryFilterCard';
import CategoryProductCard from './CategoryProductsSection/CategoryProductCard';
import rabbit1 from '../Home/TrendProductSection/images/rabbit1.jpg';
import rabbit2 from '../Home/TrendProductSection/images/rabbit2.jpg';
import rabbit3 from '../Home/TrendProductSection/images/rabbit3.jpg';
import rabbitmeat1 from '../Home/TrendProductSection/images/rabbitmeat1.jpg';
import rabbitmeat2 from '../Home/TrendProductSection/images/rabbitmeat2.jpg';
import rabbitmeat3 from '../Home/TrendProductSection/images/rabbitmeat3.jpg';

const Category = () => {
  const [filterItems, setFilterItems] = useState([]);
  const [filterState, setFilterState] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState({Min:0,Max:0});

  const trendingProducts = [
    {
      title: "rabbit Angora",
      newPrice: 125,
      oldPrice: 21.99,
      img: rabbit1,
    },
    {
      title: "rabbit Belgian",
      newPrice: 157,
      oldPrice: 30.99,
      img: rabbit2,
    },
    {
      title: "rabbit Flemish",
      newPrice: 8.99,
      oldPrice: 125,
      img: rabbit3,
    },
    {
      title: "Chicken",
      newPrice: 6.39,
      oldPrice: 11.99,
      img: rabbitmeat1,
    },
    {
      title: "rabbit Meat",
      newPrice: 12.9,
      oldPrice: 17.99,
      img: rabbitmeat2,
    },
    {
      title: "Chicken Meat",
      newPrice: 9.21,
      oldPrice: 12.99,
      img: rabbitmeat3,
    },{
      title: "rabbit Angora",
      newPrice: 350,
      oldPrice: 21.99,
      img: rabbit1,
    },
    {
      title: "rabbit Belgian",
      newPrice: 247,
      oldPrice: 30.99,
      img: rabbit2,
    },
    {
      title: "rabbit Flemish",
      newPrice: 8.99,
      oldPrice: 350,
      img: rabbit3,
    },
    {
      title: "Chicken",
      newPrice: 6.39,
      oldPrice: 11.99,
      img: rabbitmeat1,
    },
    {
      title: "rabbit Meat",
      newPrice: 12.9,
      oldPrice: 17.99,
      img: rabbitmeat2,
    },
    {
      title: "Chicken" ,
      newPrice: 9.21,
      oldPrice: 12.99,
      img: rabbitmeat3,
    },{
      title: "rabbit Angora",
      newPrice: 232,
      oldPrice: 21.99,
      img: rabbit1,
    },
    {
      title: "rabbit Belgian",
      newPrice: 278,
      oldPrice: 30.99,
      img: rabbit2,
    },
    {
      title: "rabbit Flemish",
      newPrice: 8.99,
      oldPrice: 232,
      img: rabbit3,
    },
    {
      title: "Chicken",
      newPrice: 6.39,
      oldPrice: 11.99,
      img: rabbitmeat1,
    },
    {
      title: "rabbit Meat",
      newPrice: 12.9,
      oldPrice: 17.99,
      img: rabbitmeat2,
    },
    {
      title: "Chicken Meat",
      newPrice: 9.21,
      oldPrice: 12.99,
      img: rabbitmeat3,
    },
  ];


  const handleFilterCategory = (categoryFilter) => {
    setFilterState(false);
    setCategoryFilter(categoryFilter);
    applyFilters(categoryFilter, priceFilter.Min,priceFilter.Max);
  };

  const hanldeFilterPrice = (priceMin,priceMax) => {
    setFilterState(false);
    setPriceFilter(priceFilter);
    applyFilters(categoryFilter, priceMin,priceMax);
  };

  const applyFilters = (category,priceMin,priceMax) => {
    let filteredItems = [...trendingProducts];

    if (category !== 'All') {
      filteredItems = filteredItems.filter((item) =>
        item.title.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (priceMin !== 0 && priceMax!==0) {
      filteredItems = filteredItems.filter(
        (item) => item.newPrice >= priceMin && item.newPrice <= priceMax
      );
    }

    setFilterItems(filteredItems);
  };

  return (
    <div className={`${CSS['grid-container']} container`}>
      <div className={CSS['category-filter']}>
        <CategoryFilterCard filterCategory={handleFilterCategory} filterprice={hanldeFilterPrice} />
      </div>
      <div className={CSS['product']}>
        <CategoryProductCard ItemList={filterState ? trendingProducts : filterItems} />
      </div>
    </div>
  );
};

export default Category;



