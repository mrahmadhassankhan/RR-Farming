import React, { useState, useEffect } from 'react'
import GridLayout from '../../components/GridLayout'

import './UserQuery.css'
import axios from 'axios'

const UserQuery = () => {
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
      <h1 className='addproduct-title'>User Query List</h1>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Subject</th>
          <th>Email</th>
          <th>Message</th>
        </thead>
        {products.map((item) => (
            <tr>
              <td key={item._id}>{item._id}</td>
              <td key={item._id}>{item.name}</td>
              <td key={item._id}>{item.subject}</td>
              <td key={item._id}>{item.email}</td>
              <td key={item._id}>{item.message}</td>
            </tr>
        ))}
        </table>
    </GridLayout>
  )
}

export default UserQuery
