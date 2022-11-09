import React from 'react';
import './style.scss'

export const Product = () => {
  return (
    <>
      <div className="jumbotron text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
      
      <div className="container">
        <div className="row">
            <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Pate à tartiner nutella..." />
                  <button>
                    <svg className="bi bi-search" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                      <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                  </button>
                </div>
              </form>
        </div>
      </div>

      <div className="card-group">
        <div className="card product1">
          <img className="card-img-top" src="https://fakeimg.pl/300x300/" alt="Card image cap" />
          <div className="card-body d-flex flex-column">
            <h3 className="card-title">Modular Wireless Sensor Node</h3>
            <p>WISE-4000 Series</p>
           <ul>
            <li>Support Wi-Fi, 3G, NB-IoT, LoRa wireless communication
             </li>
            <li>Powered by battery or solar rechargeable battery</li>
             <li>Built-in sensor and RS-485 port</li>
             </ul>
          <div className="buy mt-auto">
          <p className="product-price">From €360.10</p>
           <p className="product-price-btn">Buy Online </p>
            </div>
          </div>
        </div>
        <div className="card product2">
          <img className="card-img-top" src="https://fakeimg.pl/300x300/" alt="Card image cap" />
          <div className="card-body d-flex flex-column">
            <h3 className="product-name">Compact Intelligent Gateway </h3>
            <p className="product-desc">ADAM-6700 </p>
           <ul>
            <li>Data acquisition and analytics
            </li>
            <li>Encrypted Cloud /database access
            </li>
            <li>Built in Node-Red: Graphical programmable environment</li>
       </ul>
          <div className="buy mt-auto">
          <p className="product-price">From €360.10</p>
           <p className="product-price-btn">Buy Online </p>
            </div>
          </div>
        </div>
        <div className="card product3">
          <img className="card-img-top" src="https://fakeimg.pl/300x300/" alt="Card image cap" />
          <div className="card-body d-flex flex-column">
            <h3 className="product-name">All-in-One Terminal for Data Pre-treatment</h3>
      <p className="product-desc">ADAM-3600</p>
          <ul>
              <li>20 x I/O channels and 4 x expansion slots for integrating different sensors</li>
              <li>Edge intelligence software with checklist function for system configuration without</li>
              <li>Supports various field devices and controller protocols</li>
          </ul>
       
          </div>
        </div>
      </div>  
    </>
  );
}