import React,{useContext} from 'react'
import { NavLink ,Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import ProductContext from '../context/Context'

const linkStyle =({isActive}) =>{
  return{
    boxShadow:isActive?'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset':'none'
  }
}
function Navbar() {
  const {cardItem}=useContext(ProductContext);

  return (
    <div className='navbar_container'>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="title_container">
              <Link to='/'>
                <FontAwesomeIcon icon={faCartShopping}/> 
                <span>My Shop</span>
              </Link>
          </div>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbarContainer me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className="nav-link"  style={linkStyle} to='/home'>Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link"  style={linkStyle} to='/product'>Product</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link"  style={linkStyle} to='/contact'>Contact</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link"  style={linkStyle} to='/about'>About</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link"  style={linkStyle} to='/logIn'>LogIn</NavLink>
              </li>
            </ul>
          
            <Link to='/products/card'>
                <div className='cartPlusBox'>
                  <FontAwesomeIcon className='icon' icon={faCartPlus}/> 
                  <span className='num'>{cardItem.length}</span>
                </div>
            </Link>
            
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar