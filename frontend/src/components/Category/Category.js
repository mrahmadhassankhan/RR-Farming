import React, { useState,useEffect } from 'react';
import CSS from './Category.module.css';
import CategoryFilterCard from './CategorySection/CategoryFilterCard';
import CategoryProductCard from './CategoryProductsSection/CategoryProductCard';
import rabbit1 from '../Home/TrendProductSection/images/rabbit1.jpg';
import rabbit2 from '../Home/TrendProductSection/images/rabbit2.jpg';
import rabbit3 from '../Home/TrendProductSection/images/rabbit3.jpg';
import rabbitmeat1 from '../Home/TrendProductSection/images/rabbitmeat1.jpg';
import rabbitmeat2 from '../Home/TrendProductSection/images/rabbitmeat2.jpg';
import rabbitmeat3 from '../Home/TrendProductSection/images/rabbitmeat3.jpg';
import axios from 'axios'

const Category = () => {
  const [filterItems, setFilterItems] = useState([]);
  const [filterState, setFilterState] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState({Min:0,Max:0});


  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1783/api/getproduct")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);


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
    let filteredItems = [...products];

    if (category !== 'All') {
      filteredItems = filteredItems.filter((item) =>
        item.productName.toLowerCase().includes(category.toLowerCase())
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
        <CategoryProductCard ItemList={filterState ? products : filterItems} />
      </div>
    </div>
  );
};

export default Category;



