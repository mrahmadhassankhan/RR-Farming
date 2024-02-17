import React, { useState, useEffect } from 'react'
import CSS from './EditCategory.module.css'
import GridLayout from '../../components/GridLayout'
import axios from 'axios'

const EditCategory = () => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1783/api/getcategory")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleEditCategory = (e) => {
    e.preventDefault();
  }
  const handleDeleteCategory = (categoryId) => {
    axios.delete(`http://localhost:1783/api/deletecategory/${categoryId}`).then((res) => {
      setCategories(categories.filter((category) => category._id !== categoryId));
    }).catch((err) => console.error(err));
  }

  return (
    <GridLayout>
      <h1 className={CSS['addcategory-title']}>Edit your Category</h1>
      <table className={CSS['table']}>
        <thead >
          <tr >
            <th className={CSS['table-head-row']}>Category Name</th>
            <th className={CSS['table-head-row']}>Category Image</th>
            <th className={`${CSS['table-head-row']} ${CSS['table-head-btn']}`}>Edit Category</th>
            <th className={`${CSS['table-head-row']} ${CSS['table-head-btn']}`}>Delete Category</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((list) => (
            <tr key={list._id}>
              <td className={CSS['table-data']}>{list._id}</td>
              <td className={CSS['table-data']}><img src={list.categoryImage} alt={list.categoryName} width={'80px'} height={'80px'} /></td>
              <td className={CSS['table-data']}><button className={CSS['table-data-edit-btn']} type='submit' onSubmit={handleEditCategory}>Edit</button></td>
              <td className={CSS['table-data']}><button className={CSS['table-data-delete-btn']} type='submit' onSubmit={() => handleDeleteCategory(list._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </GridLayout>
  )
}

export default EditCategory;