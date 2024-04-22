import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Design(params) {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`).then((resp)=>{
            
            setProducts(resp.data)
        })
    })
  return (
    <div className='col shadow p-3' >
       <div className='h5 text-capitalize mb-3'>
           <Link to = {params.category}> {params.category} <span className='bi bi-chevron-right'></span></Link>
       </div>
       <div className='d-flex flex-wrap gap-3'>
       {products.map((val,index)=>(
            (index < 4 && <div>
                <img src = {val.image} width="150" height="130"/>
                <div className='text-center mt-1'>price $ {val.price}</div>
            </div>)
        ))}
       </div>
    </div>
  )
}
