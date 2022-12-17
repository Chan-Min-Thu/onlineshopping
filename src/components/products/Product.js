import React, {useState,useEffect} from 'react'
import Item from './Item'
import axios from 'axios'
import './product.css'
import Scroll from '../home/Scroll'


function Product() {
  const [products,setProducts]=useState([])
  const [filtered,setFiltered] = useState(products)
  const [loading,setLoading] = useState(true)

useEffect(() => {
 axios.get('https://fakestoreapi.com/products')
 .then((response) => {
      setProducts(response.data)
      setFiltered(response.data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
    })

}, [])
  
  const Loading = ()=>{
      return(
        <div> 
          <h1>Loading</h1>
        </div>
      )   
  }
  

  let handleChange = (e)=>{
    let dropDownValue= e.target.title
    let filteredProducts = products.filter(product => product.category === dropDownValue)
    console.log(filteredProducts)
    setFiltered(filteredProducts)
  }
  
  return (
    <div className='product-container'>
      <div className='headerContainer'>
        
      <h3 className='header' onClick={()=>setFiltered(products)}>All Products</h3>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Categories
          </button>
          <ul className="dropdown-menu" >
            <li><button className="dropdown-item" title="men's clothing" onClick={handleChange} type="button">Men's Clothing</button></li>
            <li><button className="dropdown-item" title="women's clothing" onClick={handleChange} type="button">Women's Clothing</button></li>
            <li><button className="dropdown-item" title="jewelery" onClick={handleChange} type="button">Jewelery</button></li>
            <li><button className="dropdown-item" title="electronics" onClick={handleChange} type="button">Electronics</button></li>
          </ul>
        </div>
      </div>
      <div className='product-box'>
        {
         loading === true ? <Loading/>:
          filtered.map(product => 
          <Item 
          key={product.id*Math.random()} 
          className='product-card' 
          product={product} 
          products = {products}
          />
          )
        }
        <Scroll/>
      </div> 
    </div>
  )
}

export default Product