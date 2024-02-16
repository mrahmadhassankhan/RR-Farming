import React from 'react'
import GridLayout from '../../components/GridLayout'
import CSS from './EditProduct.module.css'

const EditProduct = () => {
    return (
        <GridLayout>
            <h1 className={CSS['addproduct-title']}>Edit your Product</h1>
        </GridLayout>
    )
}

export default EditProduct