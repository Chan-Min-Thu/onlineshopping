import React,{useContext,useState} from 'react'
// import { useCallback } from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import './product.css'
import ProductContext from '../context/Context'

function Item({ product,products}) {
  const global = useContext(ProductContext)
  const [display,setDisplay] = useState(true)
  const dispatchCard = global.dispatchCard;
  const nav = useNavigate();

  const handleClick =()=>{
    nav(`/products/${product.id}`)
  }
  
  const handleChangeSimple=()=>{
    dispatchCard({type: display?"ADD":"DELETE",payload:product});
    setDisplay(!display)
    console.log("list render",display)
  }
  
  return (
    
      <div className="cardbox" key={product.id}id={product.id} style={{width: "16em", maxHeight:"350px"}}>
        <img src={product.image} className="card-img-top card_image" alt="..."/>
          <div className="card-body">
            <p className="card-title">{product.categories}</p>
            <p className='card-text'>{product.title}</p>
            <p className="card-text">${product.price}</p>
            <div className='buttons'>
              <NavLink 
              id = {product.id}
              type="button" 
              className="btn btn-primary" 
              // to={`../products/card`} 
              onClick={handleChangeSimple}>
                {display?"Add":"Cancle"}
              </NavLink>
             
              
              <button className="btn btn-primary" onClick={handleClick} product={product}>Details</button>
            </div>
          </div>
      </div>
  
  )
}

export default Item