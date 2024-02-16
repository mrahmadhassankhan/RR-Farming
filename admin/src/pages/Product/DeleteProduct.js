import React from 'react'
import GridLayout from '../../components/GridLayout'
import CSS from './DeleteProduct.module.css'

const DeleteProduct = () => {
    return (
        <GridLayout>
            <h1 className={CSS['addproduct-title']}>Delete your Product</h1>
        </GridLayout>
    )
}

export default DeleteProduct