import React, { useState } from 'react'
import GridLayout from '../../components/GridLayout'
import CSS from './AddProduct.module.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [categoryName, setCategoryName] = useState('');
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState("https://images.unsplash.com/photo-1480554840075-72cbdabbf689?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  const [newPrice, setNewPrice] = useState();
  const [oldPrice, setOldPrice] = useState();
  const [quantity, setQuantity] = useState();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage("https://images.unsplash.com/photo-1480554840075-72cbdabbf689?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1783/api/postproduct", {
        categoryName,
        productName,
        newPrice,
        oldPrice,
        quantity,
        productImage,
      });
      toast.success("Product Added Successfully");
    } catch (err) {
      toast.error("Product can't be added");
    }

    setCategoryName('');
    setProductName('');
    setNewPrice('');
    setOldPrice('');
    setQuantity('');
    setProductImage("https://images.unsplash.com/photo-1480554840075-72cbdabbf689?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  };

  return (
    <GridLayout>
      <h1 className={CSS['addproduct-title']}>Add your Product</h1>
      <form  className={CSS['from-container']}>
        <div>
          <div className={CSS['product-name-div']}>
            <label htmlFor='product-name'>Category Name</label>
            <input required type='text' placeholder='Category Name' id='product-name' value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
          </div>
          <div className={CSS['product-product-name-div']}>
            <label htmlFor='product-name'>Product Name</label>
            <input required type='text' placeholder='Product Name' id='product-name' value={productName} onChange={(e) => setProductName(e.target.value)} />
          </div>
          <div className={CSS['product-new-price-div']}>
            <label htmlFor='new-price'>New Price</label>
            <input min={0} required type='number' placeholder='New Price' id='new-price' value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
          </div>
          <div className={CSS['product-old-name-div']}>
            <label htmlFor='old-price'>Old Price</label>
            <input min={0} required type='number' placeholder='Old Price' id='old-price' value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} />
          </div>
          <div className={CSS['product-quantity-div']}>
            <label htmlFor='quantity'>Quantity</label>
            <input min={0} required type='number' placeholder='Quantity' id='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>
          <div className={CSS['product-selectimg-div']}>
            <label htmlFor='product-img'>Select Image</label>
            <input required className='' accept='.jpg, .jpeg, .png' type='file' id='product-img' onChange={handleImageChange} />
          </div>
          <button type='submit' onClick={handleAddProduct} className={CSS['product-button']}>Add Product</button>
        </div>
        <div className={CSS['product-img-div']}>
          {productImage && (
            <img className={CSS['product-img']} src={productImage} alt='Selected Category' width={'300px'} height={'300px'} />
          )}
        </div>
        <ToastContainer />
      </form>
    </GridLayout>
  )
}

export default AddProduct