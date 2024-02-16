import React from 'react'
import CSS from './EditCategory.module.css'
import GridLayout from '../../components/GridLayout'

const EditCategory = () => {
  return (
    <GridLayout>
      <h1 className={CSS['addcategory-title']}>Edit your Category</h1>
    </GridLayout>
  )
}

export default EditCategory