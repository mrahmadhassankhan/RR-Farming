import React from 'react'
import GridLayout from '../../components/GridLayout'
import CSS from './Orders.module.css'

const Orders = () => {
    return (
        <GridLayout>
            <h1 className={CSS['addproduct-title']}>Orders List</h1>
        </GridLayout>
    )
}

export default Orders
