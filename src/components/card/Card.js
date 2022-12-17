import React,{useContext} from 'react'
import ProductContext from '../context/Context'
import CardItem from './CardItem'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import Scroll from '../home/Scroll'

function Card() {
  const {cardItem} =useContext(ProductContext)
  console.log(cardItem)
  let price =0
  cardItem.forEach(element => {
   return price+=element.price*element.qty
   
  })
  return (
    <div className='mainCardContainer'>
      <Link to='../../product'>
        <FontAwesomeIcon className='icon arrowLeft' icon={faArrowLeft}/>
      </Link>
     <h2 style={{color:"rgb(2, 152, 252)",fontSize:"30px",fontWeight:400 ,letterSpacing:"2px"}}>Purchased Product Lists</h2>
     <br></br>
      {cardItem.length === 0 ? <h1>There is no lists.</h1>:
      <>
        {cardItem.map((card,index) => <CardItem key={index} card={card} />)}
        <p className='productTotalPrice'><span className='totalPrice'>Total </span>- ${parseFloat(price).toFixed(2)}</p>
        </>

      }
      <Scroll/>
    </div>
  )
}

export default Card