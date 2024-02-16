import React, { useState } from 'react'
import GridLayout from '../../components/GridLayout'
import CSS from './AddProduct.module.css'
import axios from 'axios'

const AddProduct = () => {
  const [categoryName, setCategoryName] = useState('');
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [newPrice, setNewPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Use FileReader to read the selected image
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the productImage state with the data URL of the selected image
        setProductImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const AddCatogoryData = [{
      category: categoryName,
      title: productName,
      newprice: newPrice,
      oldprice: oldPrice,
      productImg: productImage
    }]

    e.preventDefault();

    axios
      .post("http://localhost:1783/api/postproduct", {
        categoryName,
        productName,
        newPrice,
        oldPrice,
        quantity,
        productImage
      })
      .then((res) => {
        console.log(res.data);
        // Update state or perform other actions if needed
      })
      .catch((err) => console.error(err));
  }
  return (
    <GridLayout>
      <h1 className={CSS['addproduct-title']}>Add your Product</h1>
      <form onSubmit={handleAddProduct} className={CSS['from-container']}>
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
            <input min={0} required type='number' placeholder='Old Price' id='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>
          <div className={CSS['product-selectimg-div']}>
            <label htmlFor='product-img'>Select Image</label>
            <input required className='' accept='.jpg, .jpeg, .png' type='file' id='product-img' onChange={handleImageChange} />
          </div>
          <button type='submit' className={CSS['product-button']}>Add Product</button>
        </div>
        <div className={CSS['product-img-div']}>
          {productImage && (
            <img className={CSS['product-img']} src={productImage} alt='Selected Category' width={'300px'} height={'300px'} />
          )}
        </div>
      </form>
    </GridLayout>
  )
}

export default AddProduct