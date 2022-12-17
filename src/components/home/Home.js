
import React from 'react'
import Product from '../products/Product'
import './home.css'
import Scroll from './Scroll'

function Home() {
  
  return (
    <div className='homeBox'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={require('./image/fam.png')} className="d-block w-90" alt="..." />
              <div className="carousel-cap d-none d-md-block left">
                <div className="card-body text">
                <h5 className="card-title" style={{fontSize:'40px',letterSpacing:"3px",color:"rgb(2, 152, 252)"}}>ROYAL PRODUCTS</h5>
                  <p className="card-text" style={{fontSize:"20px",letterSpacing:"2px",color:"orange"}}>Wonderful Products are here.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={require('./image/shoppingpng.png')} className="d-block w-95 height" alt="..." />
              <div className="carousel-cap d-none d-md-block left">
                <div className="card-body text">
                  <h5 className="card-title" style={{fontSize:'40px',letterSpacing:"3px",color:"rgb(2, 152, 252)"}}>CLASSICAL DRESS</h5>
                  <p className="card-text" style={{fontSize:"20px",letterSpacing:"2px",color:"orange"}}>You Can Select each Product.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={require('./image/girl-shop.png')} className="d-block w-90 height" alt="..." />
               <div className="carousel-cap d-none d-md-block left">
                <div className=" text">
                  <h5 className="card-title" style={{fontSize:'40px',letterSpacing:"3px",color:'rgb(2, 152, 252)'}}>NEW ARRIVALS</h5>
                  <p className="card-text" style={{fontSize:"20px",letterSpacing:"2px",color:"orange"}}>You can search all products.</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Product/>
      <Scroll/>
    </div>

  )
}

export default Home