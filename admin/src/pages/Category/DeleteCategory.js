import React from 'react'
import CSS from './DeleteCategory.module.css'
import GridLayout from '../../components/GridLayout'

const DeleteCategory = () => {
  return (
    <GridLayout>
      <h1 className={CSS['addcategory-title']}>Delete your Category</h1>
    </GridLayout>
  )
}

export default DeleteCategory