import React, { useEffect, useState } from 'react'
import GridLayout from '../../components/GridLayout'
import CSS from './Orders.module.css'
import axios from 'axios'

const Orders = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:1783/api/getcontactus")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => console.error(err));
    }, []);
    return (
        <GridLayout>
            <h1 className={CSS['addproduct-title']}>Orders List</h1>
                {products.map((item) => (
                    <ul>
                        <li key={item._id}>{item._id}</li>
                        <li key={item._id}>{item.name}</li>
                        <li key={item._id}>{item.subject}</li>
                        <li key={item._id}>{item.email}</li>
                        <li key={item._id}>{item.message}</li>
                        </ul>
                ))}
        </GridLayout>
    )
}

export default Orders
