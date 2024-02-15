import React, { useState } from 'react'
import CSS from './AddCategory.module.css'
import GridLayout from '../../components/GridLayout'
import axios from "axios";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Use FileReader to read the selected image
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the categoryImage state with the data URL of the selected image
        setCategoryImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
  
    axios
      .post("http://localhost:1783/api/postcategory", {
        categoryName,
        categoryImage
      })
      .then((res) => {
        console.log(res.data);
        // Update state or perform other actions if needed
      })
      .catch((err) => console.error(err));
  };
  
  return (
    <GridLayout>
      <h1 className={CSS['addcategory-title']}>Add your Category</h1>
      <form onSubmit={handleAddCategory} className={CSS['from-container']}>
        <div>
          <div className={CSS['category-name-div']}>
            <label htmlFor='category-name'>Category Name</label>
            <input required type='text' placeholder='Category Name' id='category-name' value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
          </div>
          <div className={CSS['category-selectimg-div']}>
            <label htmlFor='category-img'>Select Image</label>
            <input required className='' accept='.jpg, .jpeg, .png' type='file' id='category-img' onChange={handleImageChange} />
          </div>
            <button type='submit' className={CSS['category-button']}>Add Category</button>
        </div>
        <div className={CSS['category-img-div']}>
          {categoryImage && (
            <img className={CSS['category-img']} src={categoryImage} alt='Selected Category' width={'300px'} height={'300px'} />
          )}
        </div>
      </form>
    </GridLayout>
  )
}

export default AddCategory