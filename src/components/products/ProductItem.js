import React from 'react'
import { useState, useEffect ,useContext} from 'react'
import { useParams} from 'react-router'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import { NavLink , useNavigate} from 'react-router-dom'
import ProductContext from '../context/Context';

function ProductItem() {
    const G = useContext(ProductContext)
    const card = G.cardItem
    const dispatchCard = G.dispatchCard
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [d,setD] = useState(false)
    console.log("ProductItem",card)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data)
                setLoading(false)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const nav = useNavigate();
    const handleClick = ()=>{
        nav("/product")
    }
    const handle=()=>{
        dispatchCard({type:d?"DELETE":"ADD",payload:product})
        setD(!d)
    }

    const Loading = ()=>{
        return(
            <>
            Loading
            </>
        )
    }
    const ShowProduct =()=>{
        return(
            <div className='productItemContainer'>
                <FontAwesomeIcon className='icon iconArrowLeft' onClick={handleClick} icon={faArrowLeft}/>
                <div className='productItemImage'>
                    <img src={product.image} style={{width:'300px',height:'350px'}} alt={'hello'}/>
                </div>
                <div className='productItemInfo'>
                    <h4 className='productItemHeader'>{product.category}</h4>
                    <hr></hr>
                    <div className='productItemInformation'>
                        <p className='productItemTitle text_start'>{product.title}</p>
                        <p className='productPrice text_start'><span className='price bold'>Price</span>- ${product.price}</p>
                        <p className='productItemDescription text_start'>{product.description}</p>
                        <p className='productRating text_start'>Rating {product.rating && product.rating.rate}<FontAwesomeIcon className='icon' icon={faStar}/></p>
                        <div className='buttons'>  
                         
                            <button 
                            type="button"
                            className='btn btn-primary width' 
                            onClick={handle}>
                                {d?"Cancle":"Add"}
                            </button>
                           
                            <NavLink 
                                type="button" 
                                to={`../products/card`} 
                                className="btn btn-primary width" 
                                >
                                    Show To Cart
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {
            loading?<Loading/>:<ShowProduct/>
}
        </div>
    )
}

export default ProductItem