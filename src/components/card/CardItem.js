import React, { useContext } from 'react'
import './card.css'
import { faPlus,faMinus, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductContext from '../context/Context'


function CardItem({card}) {
  const {dispatchCard} = useContext(ProductContext)
  return (
    <div className='cardBox'>
    <div className='cardContainer'>
      
      <div className='cardImage'>
        
        <img src={card.image}  style={{width:'100px',height:'150px'}} alt="..."/>
      </div>
      <div className='cardInfo'>
        <h4>{card.category.toUpperCase()}</h4>
        <p>{card.title}</p>
        <FontAwesomeIcon onClick={()=>dispatchCard({type:"ADD",payload:card})} className='icon' icon={faPlus}/>
        <FontAwesomeIcon onClick={()=>dispatchCard({type:"DELETE",payload:card})} className='icon' icon={faMinus}/>
        <p><span style={{font:"bold",fontSize:"18px"}}>Number</span> - {card.qty}</p>
        <p><span style={{font:"bold",fontSize:"18px"}}>Price</span> - ${parseFloat(card.price*card.qty).toFixed(2)}</p>
      </div>
      <div>
      <FontAwesomeIcon  onClick={()=>{dispatchCard({type:'All Delete',payload:card})}} className='icon trashIcon' icon={faTrash}/>
      </div>
      
    </div>
    <hr/>
    </div>
  )
}

export default CardItem